import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Louis Maximillian | Web Developer & IT-AI Specialist",
  description: "Portofolio Profesional Louis Maximillian - Web Developer di RS RKZ Surabaya & IT/AI Specialist. Menampilkan proyek Full-Stack, riset YOLOv11 dengan Raspberry Pi, dan sistem otomasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0b0e] text-[#f3f4f6] font-sans">
        {children}
      </body>
    </html>
  );
}
