export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
};

export type HeroSlide = {
  id: string;
  title: string;
  summary: string[];
  image: string;
  link: string;
  tag: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
  href: string;
};

export type ArticleItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  views?: number;
  author?: string;
  image: string;
  link: string;
};

export type BenefitSlide = {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
};

export type AgendaItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  mode: "Hybrid" | "Offline" | "Online";
  location: string;
  image: string;
  link: string;
};

export type PartnerItem = {
  name: string;
  logo: string;
  href: string;
  scale?: number;
  yOffset?: string;
};

export const aboutContent = {
  history: {
    title: "Sejarah PII Cabang Pangkalpinang",
    lead:
      "Perjalanan cabang Pangkalpinang merefleksikan dinamika pembangunan Bangka Belitung yang bertumpu pada karya insinyur lokal.",
    paragraphs: [
      "Cikal bakal PII Cabang Pangkalpinang lahir pada medio 1970-an melalui komunitas insinyur pertambangan timah yang berjejaring di Kota Pangkalpinang. Forum ini kemudian diresmikan sebagai cabang pada 1974 untuk memastikan praktik keinsinyuran di kepulauan berjalan etis dan profesional.",
      "Memasuki dekade 2000-an, cabang memperluas mandat ke sektor infrastruktur perkotaan, air bersih, dan ketahanan pesisir. Program rekognisi pembelajaran lampau, pendampingan sertifikasi, serta advokasi proyek publik menjadi fondasi pelayanan anggota.",
      "Restrukturisasi tahun 2024 menghadirkan kepengurusan baru dengan fokus pada hilirisasi timah berkelanjutan, smart port Pangkal Balam, dan penyiapan talenta teknik muda di era transisi energi.",
    ],
    timeline: [
      {
        period: "1974",
        title: "Peresmian Cabang",
        description:
          "Komunitas insinyur Pangkalpinang dikukuhkan sebagai cabang resmi PII untuk mengawal proyek vital kepulauan dan memastikan penerapan kode etik.",
      },
      {
        period: "1995",
        title: "Ekspansi Program Keanggotaan",
        description:
          "Program peningkatan kompetensi dan sidang pendaftaran anggota baru mulai rutin digelar bersama perguruan tinggi dan BUMN tambang.",
      },
      {
        period: "2010",
        title: "Modernisasi Infrastruktur Kota",
        description:
          "Cabang memimpin kajian teknis sistem drainase kota, pelabuhan Pangkal Balam, serta penyediaan air baku lintas pulau.",
      },
      {
        period: "2024",
        title: "Restrukturisasi & Agenda Hijau",
        description:
          "Struktur organisasi diperbarui, roadmap hilirisasi timah rendah emisi disusun, dan laboratorium inovasi smart port diluncurkan.",
      },
    ],
  },
  vision: {
    title: "Visi & Misi",
    vision:
      "Menjadi katalis insinyur Bangka Belitung yang kompeten, berintegritas, dan memimpin transformasi industri berkelanjutan.",
    missions: [
      "Menguatkan kompetensi anggota melalui program profesi dan sertifikasi.",
      "Menghadirkan solusi advokasi teknik untuk pemerintah dan industri.",
      "Mendorong inovasi hijau dan digital pada seluruh proyek strategis daerah.",
    ],
  },
  board: {
    title: "Struktur Pengurus Cabang PII Pangkalpinang 2024–2027",
    sections: [
      {
        heading: "Dewan Pembina",
        people: [
          { role: "", name: "Walikota Pangkalpinang" },
          { role: "", name: "Sekda Kota Pangkalpinang" },
          { role: "", name: "Kapolres Kota Pangkalpinang" },
          { role: "", name: "Kejari Kota Pangkalpinang" },
          { role: "", name: "Pengurus PII Provinsi Kepulauan Bangka Belitung" },
        ],
      },
      {
        heading: "Dewan Penasehat",
        people: [
          { role: "", name: "H. Heriady, ST." },
          { role: "", name: "Ir. Damardi, S.ST., MM., IPM., ASEAN Eng." },
        ],
      },
      {
        heading: "Pengurus Cabang",
        people: [
          { role: "Ketua", name: "Ir. Hadi Fitriyansyah, ST., M.PWK." },
          { role: "Wakil Ketua", name: "Febri Guinesna Putra, ST., MUD." },
          { role: "Sekretaris", name: "Rifqi Adi Nugraha, ST., M.Si." },
          { role: "Bendahara", name: "Arsha Riyantkha Meraldha, ST., M.PWK." },
          { role: "Wakil Bendahara", name: "Fadiah Izzah Ajrina, M.PWK." },
        ],
      },
      {
        heading: "Bidang Pengembangan Kawasan, Tata Ruang, dan Permukiman",
        people: [
          { role: "Ketua", name: "Fadiah Izzah Ajrina, M.PWK." },
          { role: "Anggota", name: "Arsha Riyantkha Meraldha, ST., M.PWK." },
          { role: "Anggota", name: "Widya Utami, ST." },
        ],
      },
      {
        heading: "Bidang Arsitek dan Konstruksi Sipil",
        people: [
          { role: "Ketua", name: "Ravy Ray Laksamana, ST." },
          { role: "Anggota", name: "Seldy, ST." },
          { role: "Anggota", name: "Ridho Agustian, ST." },
          { role: "Anggota", name: "Rivaldi, ST." },
          { role: "Anggota", name: "Muhammad Fajar Aprilian, S.Ds." },
          { role: "Anggota", name: "Imam Sodikun, S.Ars." },
        ],
      },
      {
        heading: "Bidang Pertanian, Peternakan, Kehutanan, dan Lingkungan Hidup",
        people: [
          { role: "Ketua", name: "Dudy Gilang, S.Si." },
          { role: "Anggota", name: "Fahri Setiawan, SP., M.Si." },
          { role: "Anggota", name: "Zuissar Wahyu" },
        ],
      },
      {
        heading: "Bidang Energi, Industri, dan Rekayasa Teknologi",
        people: [
          { role: "Ketua", name: "Ir. Okta Nopriansyah, ST." },
          { role: "Anggota", name: "Belly, ST." },
        ],
      },
      {
        heading: "Komite Humas, Media, Publikasi, Keanggotaan, Registrasi, dan Kesekretariatan",
        people: [{ role: "Ketua", name: "Adam Juliansyah, S.Kom." }],
      },
      {
        heading: "Komite Pendidikan, Pelatihan, dan Kerjasama Antar Lembaga",
        people: [{ role: "Ketua", name: "Ir. Hadi Fitriyansyah, ST., M.PWK." }],
      },
      {
        heading: "Komite Pengawas Internal dan Pengembangan Organisasi",
        people: [
          { role: "Ketua", name: "Aripin, ST." },
          { role: "Anggota", name: "H. Heriady, ST." },
        ],
      },
    ],
  },
};

export const navItems: NavItem[] = [
  { label: "Beranda", href: "/" },
  {
    label: "Tentang",
    href: "/tentang/sejarah",
    children: [
      { label: "Sejarah PII Pangkalpinang", href: "/tentang/sejarah" },
      { label: "Visi & Misi", href: "/tentang/visi-misi" },
      { label: "Struktur Pengurus", href: "/tentang/struktur" },
    ],
  },
  {
    label: "Kabar",
    href: "/#kabar",
    children: [
      { label: "Berita", href: "/#berita" },
      { label: "Sorotan Insinyur", href: "/#dari-insinyur" },
    ],
  },
  { label: "Agenda", href: "/#agenda" },
  { label: "Layanan", href: "/#layanan" },
  { label: "Dokumen", href: "/#dokumen" },
];

export const heroSlides: HeroSlide[] = [
  {
    id: "pemkot-pkp",
    title:
      "Kolaborasi PII Pangkalpinang & Pemkot Percepat Modernisasi Infrastruktur Pesisir",
    summary: [
      "PII Cabang Pangkalpinang menggandeng Pemerintah Kota untuk merampungkan masterplan tanggul laut terpadu yang melindungi permukiman pesisir dan pelabuhan perikanan. Tim lintas disiplin memimpin audit struktur serta penerapan sensor IoT arus laut.",
      "Program ini memprioritaskan keterlibatan insinyur muda lokal agar transfer pengetahuan terus hidup di Bangka Belitung.",
    ],
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1400&q=80",
    link: "/#berita",
    tag: "Infrastruktur Kota",
  },
  {
    id: "profesi-insinyur",
    title: "Batch Ke-3 Program Profesi Insinyur Resmi Dibuka di Pangkalpinang",
    summary: [
      "PII Pangkalpinang bekerja sama dengan Universitas Bangka Belitung menghadirkan jalur Rekognisi Pembelajaran Lampau (RPL) dan jalur reguler untuk insinyur industri timah, konstruksi, dan energi terbarukan.",
      "Peserta mendapat pembimbing IPU nasional dan coaching klinik kesiapan sertifikasi SKIP.",
    ],
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80",
    link: "/#layanan",
    tag: "Pengembangan Kompetensi",
  },
  {
    id: "industri-timah",
    title: "Insinyur Pangkalpinang Kawal Transformasi Hilirisasi Industri Timah",
    summary: [
      "Forum Teknik PII Pangkalpinang mendorong penerapan standar keselamatan kerja baru di pabrik peleburan dan fasilitas hilirisasi logam ringan.",
      "Rangkaian audit teknis memastikan inovasi berlangsung seraya meminimalkan jejak karbon operasi.",
    ],
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    link: "/#kabar",
    tag: "Industri Strategis",
  },
  {
    id: "smart-port",
    title: "Roadmap Pelabuhan Pintar Pangkal Balam: Integrasi Digital Supply Chain",
    summary: [
      "PII bersama operator pelabuhan merilis roadmap otomatisasi dermaga dan monitoring struktur dermaga curah cair.",
      "Pilot project memanfaatkan digital twin dan dashboard energi untuk memotong antrean bongkar muat hingga 32%.",
    ],
    image:
      "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?auto=format&fit=crop&w=1400&q=80",
    link: "/#agenda",
    tag: "Pelabuhan Pintar",
  },
];

export const services: ServiceItem[] = [
  {
    title: "Keanggotaan",
    description:
      "Jaringan 700+ insinyur Bangka Belitung dengan klinik karier, forum proyek strategis, dan akses praxis digital PII.",
    highlights: [
      "Mentoring IPM & IPU wilayah Sumatra",
      "Kartu anggota digital + akses coworking PII Pangkalpinang",
      "Prioritas undangan proyek Pemkot & BUMN tambang",
    ],
    ctaLabel: "Daftar Anggota",
    href: "https://updmember.pii.or.id/auth/register",
  },
  {
    title: "Program Profesi Insinyur",
    description:
      "Program terakreditasi yang menyesuaikan kurikulum dengan industri timah, energi pesisir, dan smart port.",
    highlights: [
      "Skema RPL untuk insinyur berpengalaman",
      "Kolaborasi dengan Universitas Bangka Belitung & Polman Babel",
      "Coaching clinic laporan keinsinyuran mingguan",
    ],
    ctaLabel: "Jadwalkan Konsultasi",
    href: "mailto:ppi@piipangkalpinang.or.id",
  },
  {
    title: "Sertifikasi",
    description:
      "Pendampingan lengkap menuju SKK, SKIP, hingga ASEAN Chartered Professional Engineer dengan penekanan proyek maritim.",
    highlights: [
      "Review portofolio oleh asesor IPU",
      "Simulasi panel wawancara daring",
      "Paket percepatan untuk proyek pemerintah",
    ],
    ctaLabel: "Mulai Penilaian",
    href: "https://piipangkalpinang.or.id/sertifikasi",
  },
  {
    title: "Advokasi",
    description:
      "Tim hukum dan teknis siap mendampingi anggota dalam isu sengketa konstruksi, keselamatan kerja, atau kontrak industri.",
    highlights: [
      "Hotline insiden 24/7 via WhatsApp",
      "Panel ahli konstruksi dan industri proses",
      "Pendampingan penyusunan dokumen pembelaan",
    ],
    ctaLabel: "Hubungi Sekretariat",
    href: "https://wa.me/6281806701775",
  },
];

export const bannerHighlight = {
  title: "Gerakan Pangkalpinang Net-Zero 2045",
  description:
    "PII Cabang Pangkalpinang mengajak ekosistem industri dan pemerintah daerah mempercepat transisi energi pesisir, menerapkan desain hijau di kawasan industri Sadai, serta menginkubasi startup keteknikan lokal.",
  ctaLabel: "Lihat Panduan Strategis",
  ctaHref: "https://piipangkalpinang.or.id/netzero2045",
  image:
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80",
};

export const news: ArticleItem[] = [
  {
    id: "news-01",
    title:
      "PII Pangkalpinang Tandatangani MoU Rehabilitasi Dermaga Pelabuhan Pangkal Balam",
    excerpt:
      "Nota kesepahaman meliputi audit struktur dermaga, sistem monitoring korosi real-time, dan skema pelatihan operator lokal.",
    date: "Kamis, 23 Oktober 2025",
    category: "Pelabuhan",
    views: 128,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
  {
    id: "news-02",
    title:
      "Forum Insinyur Muda Babel Luncurkan Laboratorium Mini Energi Surya Terapung",
    excerpt:
      "Prototype digelar di Kolong Kacang Pedang sebagai laboratorium terbuka untuk sekolah vokasi dan komunitas riset independen.",
    date: "Kamis, 23 Oktober 2025",
    category: "Energi",
    views: 96,
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
  {
    id: "news-03",
    title:
      "Workshop Keselamatan Tambang Timah Dorong Standar Baru Pengawasan Geoteknik",
    excerpt:
      "PII bersama BUMN tambang menyusun panduan instrumentasi lereng untuk operasi darat dan laut.",
    date: "Kamis, 23 Oktober 2025",
    category: "Keselamatan",
    views: 143,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
];

export const engineerInsights: ArticleItem[] = [
  {
    id: "insight-01",
    title:
      "Memodernisasi Sistem Drainase Pangkalpinang dengan Sensor Curah Hujan",
    excerpt:
      "Kelompok kerja hidro teknik menerapkan jaringan sensor berbasis LoRa untuk mempercepat respons banjir.",
    date: "Sabtu, 12 Juli 2025",
    category: "Dari Insinyur",
    image:
      "https://images.unsplash.com/photo-1435820394963-a15297f976fd?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: "insight-02",
    title:
      "Pelajaran Dari Revitalisasi PLTD Pangkal Arang dalam Integrasi Energi Surya",
    excerpt:
      "Konsep hybrid diesel-solar membutuhkan kontrol beban cerdas untuk menjaga stabilitas grid pulau kecil.",
    date: "Rabu, 4 Juni 2025",
    category: "Dari Insinyur",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: "insight-03",
    title:
      "Desain Laboratorium Riset Material Laut untuk Industri Kapal Babel",
    excerpt:
      "Tim struktur memaparkan pendekatan anti-korosi untuk kapal pendukung pertambangan dan wisata bahari.",
    date: "Senin, 2 Juni 2025",
    category: "Dari Insinyur",
    image:
      "https://images.unsplash.com/photo-1501635221054-5b30c707bd47?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

export const membershipBenefits: BenefitSlide[] = [
  {
    id: "benefit-01",
    title: "Jejaring Insinyur Strategis",
    description:
      "Terhubung dengan praktisi pelabuhan, tambang timah, dan manufaktur perikanan lewat forum kurasi bulanan.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "benefit-02",
    title: "Advokasi Teknis Prioritas",
    description:
      "Keanggotaan aktif memperoleh akses hotline advokasi kontrak dan pendampingan sengketa teknis.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "benefit-03",
    title: "Katalis Proyek Smart City",
    description:
      "Berpartisipasi dalam laboratorium inovasi digital twin kota Pangkalpinang untuk transportasi dan air minum.",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "benefit-04",
    title: "Akses Program Global",
    description:
      "Rangkaian fellowship WFEO dan ASEAN Engineers kini menempatkan kuota khusus untuk anggota cabang.",
    image:
      "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
  {
    id: "benefit-05",
    title: "Ekosistem Startup Teknik",
    description:
      "Startup keteknikan lokal mendapat coaching bisnis, akses laboratorium pengujian, serta investor day tahunan.",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
    link: "https://updmember.pii.or.id/auth/register",
  },
];

export const agenda: AgendaItem[] = [
  {
    id: "agenda-01",
    title: "Pengukuhan Pengurus PII Pangkalpinang 2024–2027",
    date: "Sabtu, 19 Oktober 2024",
    category: "Seremonial",
    mode: "Offline",
    location: "Aula Graha Rekayasa Pangkalpinang",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
  {
    id: "agenda-02",
    title: "Klinik Penyusunan RPL Program Profesi Insinyur",
    date: "Senin, 28 Oktober 2024",
    category: "Workshop",
    mode: "Hybrid",
    location: "Studio PII Pangkalpinang & Zoom",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
  {
    id: "agenda-03",
    title: "Roadshow Hilirisasi Timah Berkelanjutan",
    date: "Jumat, 8 November 2024",
    category: "Diskusi",
    mode: "Offline",
    location: "Hotel Soll Marina Pangkalpinang",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80",
    link: "https://www.instagram.com/pii_pangkalpinang/",
  },
];

export const partners: PartnerItem[] = [
  {
    name: "PT Pindad",
    logo: "/partners/pindad.png",
    href: "https://www.pindad.com",
    scale: 1.2,
  },
  {
    name: "Karya Teknologi Abadi",
    logo: "/partners/kta.png",
    href: "https://karyateknologiabadi.com",
    scale: 1.35,
  },
  {
    name: "Universitas Bangka Belitung",
    logo: "/partners/universitas-bangka-belitung.jpg",
    href: "https://ubb.ac.id",
    scale: 1.45,
  },
  {
    name: "Tripatra",
    logo: "/partners/tripatra.png",
    href: "https://www.tripatra.com/id",
    scale: 1.6,
  },
  {
    name: "PT Timah Tbk",
    logo: "/partners/pt-timah.png",
    href: "https://www.pttimah.co.id",
    scale: 1.55,
  },
  {
    name: "PT Jaya Konstruksi",
    logo: "/partners/jaya-konstruksi.png",
    href: "https://www.jayakonstruksi.com/index.php",
    scale: 1.75,
  },
  {
    name: "Pelindo",
    logo: "/partners/pelindo.png",
    href: "https://www.pelindo.co.id/",
    scale: 1.85,
  },
  {
    name: "Cirebon Power",
    logo: "/partners/cirebon-power.png",
    href: "https://www.cirebonpower.co.id/id/",
    scale: 1.9,
  },
  {
    name: "Green Corridor Group",
    logo: "/partners/green-corridor.jpg",
    href: "https://www.pii.or.id/green%20corridor%20group",
    scale: 1.7,
  },
  {
    name: "Nginovasi",
    logo: "/partners/nginovasi.png",
    href: "https://nginovasi.com/",
    scale: 1.85,
  },
  {
    name: "PT DQC",
    logo: "/partners/pt-dqc.png",
    href: "https://www.ptdqc.com/",
    scale: 1.8,
  },
  {
    name: "Polman Babel",
    logo: "/partners/polman-babel.png",
    href: "https://polman-babel.ac.id",
    scale: 1.65,
  },
];

export const footerContent = {
  addressLabel: "Graha Rekayasa Pangkalpinang",
  address:
    "Jl. Jenderal Ahmad Yani No. 88, Kel. Gajah Mada, Kec. Taman Sari, Pangkalpinang 33121",
  phone: "+62 818 0670 1775",
  email: "piipkp@gmail.com",
  hashtags: ["#InsinyurKompeten", "#BangsaUnggul", "#PIIPangkalpinang"],
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/piipangkalpinang" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pii_pangkalpinang/",
    },
    { name: "X", href: "https://x.com/pii_pangkalpinang" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/pii-pangkalpinang" },
    { name: "YouTube", href: "https://www.youtube.com/@piipangkalpinang" },
  ],
  policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookies Settings", href: "#" },
  ],
};

export const documents = [
  {
    title: "Pedoman Tata Kelola PII Pangkalpinang 2025",
    description:
      "Rujukan lengkap struktur organisasi, kode etik, dan prosedur sidang anggota cabang.",
    href: "#",
  },
  {
    title: "Formulir Keanggotaan & SKK Area Babel",
    description:
      "Dokumen pendaftaran anggota baru berikut checklist berkas Rekognisi Pembelajaran Lampau.",
    href: "#",
  },
  {
    title: "Blueprint Net-Zero Kawasan Industri Sadai",
    description:
      "Laporan teknis versi publik terkait roadmap energi bersih hasil kajian PII Pangkalpinang.",
    href: "#",
  },
];











