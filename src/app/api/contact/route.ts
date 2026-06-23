import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { insertContact } from '../../../lib/db';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }


    const created_at = new Date().toISOString();
    let id = null;
    
    try {
      // Jika penulisan ke file JSON gagal atau error di Vercel, kode tidak akan crash
      id = insertContact({ name, email, subject, message, created_at });
    } catch (dbErr) {
      // Hanya mencetak error di log Vercel tanpa menghentikan proses kirim email
      console.warn('Penyimpanan JSON gagal di serverless, lanjut mengirim email:', dbErr);
      id = Date.now().toString(); // ID cadangan agar sisa kode di bawah tidak error
    }


    // Try to send email if SMTP config exists. Use dynamic import so build won't fail when nodemailer is not installed.
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = process.env.SMTP_PORT;
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const CONTACT_TO = process.env.CONTACT_TO || 'lsmaximillian@gmail.com';

    let emailSent = false;
    let emailError: string | null = null;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      try {
        const nodemailer = await import('nodemailer');
        const transporter = nodemailer.createTransport({
          host: SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '465'),
          secure: true,
          auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: SMTP_USER,
          to: CONTACT_TO,
          subject: `New contact form: ${subject || 'No subject'}`,
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
        });

        emailSent = true;
      } catch (err: any) {
        emailError = (err && err.message) || String(err);
        console.warn('nodemailer not available or send failed:', err);
      }
    }

    const resBody: any = { ok: true, id, emailSent };
    if (process.env.NODE_ENV !== 'production' && emailError) resBody.emailError = emailError;
    return NextResponse.json(resBody);
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const jsonPath = path.join(process.cwd(), 'data', 'contacts.json');
    if (!fs.existsSync(jsonPath)) {
      return NextResponse.json({ ok: true, contacts: [] });
    }

    const raw = fs.readFileSync(jsonPath, 'utf-8');
    const store = JSON.parse(raw);
    return NextResponse.json({ ok: true, contacts: store.contacts || [] });
  } catch (err) {
    console.error('Contact GET error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
