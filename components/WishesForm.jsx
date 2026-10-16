'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

const initialWishes = [
  { id: 1, name: 'Budi Santoso', message: 'Selamat bertunangan! Semoga dilancarkan sampai ke pelaminan.' },
  { id: 2, name: 'Maya Putri', message: 'Bahagia selalu untuk kalian berdua.' },
];

// Buku tamu / ucapan — gaya editorial (input garis bawah, daftar bergaris).
export default function WishesForm() {
  const [wishes, setWishes] = useState(initialWishes);
  const [form, setForm] = useState({ name: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setWishes((prev) => [{ id: Date.now(), name: form.name.trim(), message: form.message.trim() }, ...prev]);
    setForm({ name: '', message: '' });
  };

  return (
    <section className="bg-blush/30 px-6 py-24">
      <div className="mx-auto max-w-lg">
        <SectionTitle num="vii" kicker="Doa & Restu" title="Ucapan" align="left" />

        <Reveal className="mt-12">
          <form onSubmit={submit} className="space-y-5">
            <label htmlFor="ucapan-nama" className="block text-xs uppercase tracking-[0.2em] text-muted">Nama</label>
            <input
              id="ucapan-nama"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nama Anda"
              autoComplete="name"
              maxLength={60}
              className="mt-1 w-full border-b border-rose-deep/30 bg-transparent py-2.5 text-sm outline-none focus:border-rose-deep"
              required
            />
            <label htmlFor="ucapan-pesan" className="block text-xs uppercase tracking-[0.2em] text-muted">Ucapan &amp; doa</label>
            <textarea
              id="ucapan-pesan"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tulis ucapan & doa…"
              rows={3}
              maxLength={500}
              className="mt-1 w-full resize-none border-b border-rose-deep/30 bg-transparent py-2.5 text-sm outline-none focus:border-rose-deep"
              required
            />
            <button
              type="submit"
              className="inline-flex min-h-11 items-center gap-2 border-b border-rose-deep text-xs uppercase tracking-widest text-rose-deep transition hover:opacity-60"
            >
              <Send size={14} aria-hidden="true" /> Kirim Ucapan
            </button>
          </form>
        </Reveal>

        <div className="mt-10 space-y-px border-t border-rose-deep/15" aria-live="polite">
          {wishes.map((w) => (
            <div key={w.id} className="border-b border-rose-deep/15 py-4">
              <p className="font-display text-lg text-ink">{w.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
