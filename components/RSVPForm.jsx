'use client';
import { useState } from 'react';
import { Check } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

// Form konfirmasi kehadiran — gaya editorial (input garis bawah).
// Ini undangan contoh: data tidak dikirim ke mana pun.
const PESAN_URL =
  'https://wa.me/6285190931399?text=' +
  encodeURIComponent('Halo PintuWeb, saya mau pesan undangan tunangan digital seperti contoh Raka & Sinta.');

export default function RSVPForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', attendance: 'hadir', guests: 1 });
  const [done, setDone] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) return;
    onSubmit?.(form);
    setDone(true);
  };

  const field = 'mt-1 w-full border-b border-rose-deep/30 bg-transparent py-2.5 text-sm outline-none focus:border-rose-deep';
  const label = 'text-xs uppercase tracking-[0.2em] text-muted';

  return (
    <section className="bg-cream px-6 py-24">
      <div className="mx-auto max-w-lg">
        <SectionTitle num="vi" kicker="Kehadiran" title="Konfirmasi RSVP" align="left" />

        {done ? (
          <Reveal className="mt-12 border border-rose-deep/20 p-10 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center border border-rose-deep text-rose-deep">
              <Check size={22} />
            </div>
            <p className="mt-5 font-display text-2xl text-ink">Terima kasih, {form.name}.</p>
            <p className="mt-2 text-sm text-muted">
              Ini undangan contoh, jadi konfirmasi Anda tidak dikirim ke mana pun.
            </p>
            <a
              href={PESAN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block text-sm text-rose-deep underline underline-offset-4 hover:text-ink"
            >
              Pesan undangan seperti ini
            </a>
          </Reveal>
        ) : (
          <Reveal className="mt-12">
            <form onSubmit={submit} className="space-y-7">
              <label className="block">
                <span className={label}>Nama</span>
                <input name="name" value={form.name} onChange={handle} placeholder="Nama Anda" className={field} required />
              </label>
              <label className="block">
                <span className={label}>Konfirmasi</span>
                <select name="attendance" value={form.attendance} onChange={handle} className={field}>
                  <option value="hadir">Hadir</option>
                  <option value="tidak">Tidak Hadir</option>
                  <option value="ragu">Masih Ragu</option>
                </select>
              </label>
              {form.attendance === 'hadir' && (
                <label className="block">
                  <span className={label}>Jumlah Tamu</span>
                  <input type="number" name="guests" min={1} max={10} value={form.guests} onChange={handle} className={field} />
                </label>
              )}
              <button
                type="submit"
                className="mt-2 w-full bg-ink py-3.5 text-xs uppercase tracking-[0.3em] text-cream transition hover:bg-rose-deep"
              >
                Kirim Konfirmasi
              </button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
