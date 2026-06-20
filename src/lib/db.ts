import fs from 'fs';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir);

const jsonPath = path.join(dataDir, 'contacts.json');
if (!fs.existsSync(jsonPath)) fs.writeFileSync(jsonPath, JSON.stringify({ nextId: 1, contacts: [] }, null, 2));

type Contact = {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  created_at: string;
};

export function insertContact({ name, email, subject, message, created_at }: { name: string; email: string; subject?: string; message: string; created_at: string }) {
  const raw = fs.readFileSync(jsonPath, 'utf-8');
  const store = JSON.parse(raw) as { nextId: number; contacts: Contact[] };

  const id = store.nextId++;
  const entry: Contact = { id, name, email, subject: subject || '', message, created_at };
  store.contacts.push(entry);

  fs.writeFileSync(jsonPath, JSON.stringify(store, null, 2));
  return id;
}

export default null;
