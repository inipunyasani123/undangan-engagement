// ============================================================
//  KONFIGURASI UNDANGAN — Engagement / Lamaran
//  Ubah seluruh isi undangan dari satu tempat ini saja.
//
//  Ini undangan CONTOH: nama dan tempat fiktif. Gambar di
//  /public/images adalah ilustrasi fesyen buatan sendiri (tokoh
//  fiktif) — ganti dengan foto asli (potret 3:4) dan perbarui `alt`.
// ============================================================

const config = {
  // -- Meta / SEO --
  meta: {
    title: 'Undangan Tunangan — Raka & Sinta',
    description: 'Dengan penuh syukur, kami mengundang Anda untuk hadir di acara pertunangan kami.',
  },

  opening: {
    greeting: 'The Engagement Of',
    quote:
      'Cinta yang tumbuh perlahan dan dirawat dengan kesungguhan, hari ini kami satukan dalam ikatan janji untuk melangkah ke jenjang berikutnya.',
    quoteSource: 'Dengan Penuh Cinta',
  },

  // -- Foto utama di sampul & hero (berdua, potret) --
  heroImage: '/images/foto-berdua.webp',

  // `instagram` opsional: isi nama akun tanpa "@" bila ingin ditampilkan.
  couple: {
    groom: {
      name: 'Raka',
      fullName: 'Raka Adi Pratama',
      as: 'Putra dari',
      parents: 'Bpk. Suryanto & Ibu Wulandari',
      photo: '/images/calon-pria.webp',
      photoAlt: 'Ilustrasi Raka berkemeja batik lengan panjang bernuansa sage',
    },
    bride: {
      name: 'Sinta',
      fullName: 'Sinta Dewi Maharani',
      as: 'Putri dari',
      parents: 'Bpk. Hendarto & Ibu Kartika',
      photo: '/images/calon-wanita.webp',
      photoAlt: 'Ilustrasi Sinta berkebaya kutubaru sage memegang buket melati',
    },
  },

  // -- Tanggal utama untuk countdown (format ISO) --
  mainDate: '2027-07-11T10:00:00+07:00',

  events: [
    {
      name: 'Acara Lamaran',
      date: 'Minggu, 11 Juli 2027',
      time: '10.00 - 13.00 WIB',
      venue: 'Kediaman Keluarga Maharani',
      address: 'Kotagede, Yogyakarta',
      start: '2027-07-11T10:00:00+07:00',
      end: '2027-07-11T13:00:00+07:00',
    },
  ],

  // Contoh ini menunjuk area Kotagede. Ganti `q=` dengan nama/koordinat tempat acara.
  location: {
    label: 'Kediaman Keluarga Maharani, Kotagede, Yogyakarta',
    note: 'Peta contoh menunjukkan area Kotagede.',
    mapEmbed: 'https://www.google.com/maps?q=Kotagede,+Yogyakarta&output=embed',
    mapLink: 'https://maps.google.com/?q=Kotagede,+Yogyakarta',
  },

  story: [
    { year: '2019', title: 'Awal Berkenalan', desc: 'Bertemu di sebuah acara kampus — pertemuan tak terduga yang menjadi awal segalanya.' },
    { year: '2021', title: 'Semakin Dekat', desc: 'Mulai saling memahami dan menyamakan tujuan.' },
    { year: '2024', title: 'Yakin', desc: 'Memutuskan untuk serius melangkah bersama.' },
    { year: '2027', title: 'Bertunangan', desc: 'Mengikat janji dalam acara lamaran keluarga, sebulan sebelum hari pernikahan.' },
  ],

  // -- Galeri (potret 3:4) --
  gallery: [
    { src: '/images/galeri-1.webp', alt: 'Kotak cincin beludru terbuka berisi cincin emas berbatu, disentuh jemari Sinta' },
    { src: '/images/galeri-2.webp', alt: 'Tiga nampan seserahan bertudung berisi kain batik, buah, dan kue' },
    { src: '/images/galeri-3.webp', alt: 'Sinta tertawa dengan mata terpejam, sanggulnya berhias melati' },
    { src: '/images/galeri-4.webp', alt: 'Gelang dan sepasang anting filigri perak khas Kotagede' },
    { src: '/images/galeri-5.webp', alt: 'Dua cangkir kopi dan vas kecil sedap malam di meja kayu' },
    { src: '/images/galeri-6.webp', alt: 'Raka dan Sinta bergandengan melangkah menuju gerbang tua' },
  ],

  gifts: {
    enabled: false,
    note: '',
    banks: [],
  },

  // -- Musik latar (file di /public/music/) --
  music: {
    enabled: true,
    src: '/music/latar.mp3',
    title: 'Gymnopédie No. 1 — Erik Satie',
    credit: 'rekaman Teknopazzo, CC0',
  },

  footer: {
    closing:
      'Sebuah kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu di hari istimewa ini.',
    hashtag: '#RakaSintaBertunangan',
  },

  // -- Halaman /kirim (tautan undangan per tamu) --
  kirim: {
    pesan:
      'Halo {nama},\n\nDengan penuh syukur, kami mengundangmu ke acara lamaran Raka & Sinta, Minggu, 11 Juli 2027, di kediaman keluarga Maharani.\n\nDetail acara: {tautan}\n\nDoa dan kehadiranmu sangat berarti bagi kami.',
  },
};

export default config;
