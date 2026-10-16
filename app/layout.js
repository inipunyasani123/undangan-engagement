import './globals.css';
import { Playfair_Display, Sacramento, Poppins } from 'next/font/google';
import config from '@/lib/data';

const display = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});
const script = Sacramento({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sacramento',
  display: 'swap',
});
const body = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

const __jsonld = {"@context":"https://schema.org","@type":"WebSite","name":"Undangan Tunangan Digital — Raka & Sinta","url":"https://undangan-engagement.pintuweb.id","description":"Contoh undangan lamaran digital bergaya editorial: hitung mundur, galeri, peta, RSVP, ucapan, dan musik latar.","inLanguage":"id"};

export const metadata = {
  metadataBase: new URL("https://undangan-engagement.pintuweb.id"),
  title: "Undangan Tunangan Digital — Raka & Sinta",
  description: "Undangan pertunangan digital yang manis dan elegan: detail acara, galeri foto, lokasi, dan konfirmasi kehadiran dalam satu tautan.",
  applicationName: "Undangan Digital",
  keywords: ["undangan tunangan", "undangan lamaran digital", "undangan pertunangan online", "e-invitation tunangan"],
  authors: [{ name: "Undangan Digital" }],
  creator: "Undangan Digital",
  publisher: "Undangan Digital",
  alternates: { canonical: "https://undangan-engagement.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://undangan-engagement.pintuweb.id",
    siteName: "Undangan Digital",
    title: "Undangan Tunangan Digital — Raka & Sinta",
    description: "Undangan pertunangan digital yang manis dan elegan: detail acara, galeri foto, lokasi, dan konfirmasi kehadiran dalam satu tautan.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Undangan Tunangan Digital — Raka & Sinta" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Undangan Tunangan Digital — Raka & Sinta",
    description: "Undangan pertunangan digital yang manis dan elegan: detail acara, galeri foto, lokasi, dan konfirmasi kehadiran dalam satu tautan.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport = {
  themeColor: '#6e8158',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${display.variable} ${script.variable} ${body.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 76px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=engagement" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
