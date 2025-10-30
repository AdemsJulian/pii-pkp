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
};

export const aboutContent = {
  history: {
    title: "Sejarah Singkat",
    text: [
      "PII Cabang Pangkalpinang berdiri sejak 1974 sebagai wadah organisasi insinyur di Pulau Bangka dan Belitung.",
      "Kami mengawal proyek strategis daerah seperti pembangunan Pelabuhan Pangkal Balam, sistem penyediaan air baku, serta modernisasi industri timah.",
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
  { label: "Beranda", href: "#beranda" },
  { label: "Dari Meja Ketum PII", href: "#dari-ketum" },
  {
    label: "Tentang PII",
    href: "#tentang",
    children: [
      { label: "Sejarah", href: "#tentang-sejarah" },
      { label: "Visi Misi", href: "#tentang-visi" },
      { label: "Struktur Pengurus Pangkalpinang", href: "#tentang-pengurus" },
    ],
  },
  {
    label: "Kabar",
    href: "#kabar",
    children: [
      { label: "Berita", href: "#berita" },
      { label: "Dari Meja Ketum", href: "#dari-ketum" },
      { label: "Dari Insinyur", href: "#dari-insinyur" },
    ],
  },
  { label: "Agenda", href: "#agenda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Dokumen", href: "#dokumen" },
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
    link: "#berita",
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
    link: "#layanan",
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
    link: "#kabar",
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
    link: "#agenda",
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
    href: "https://wa.me/6281277755511",
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

export const chairInsights: ArticleItem[] = [
  {
    id: "chair-01",
    title:
      "Memastikan Hilirisasi Timah Berjalan Hijau Melalui Standarisasi Desain",
    excerpt:
      "Ketua Cabang menegaskan pentingnya blueprint rekayasa proses yang memadukan efisiensi energi dan pengendalian emisi.",
    date: "Minggu, 3 Agustus 2025",
    category: "Dari Meja Ketum",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: "chair-02",
    title:
      "Strategi PII Pangkalpinang Menyiapkan Talenta Keinsinyuran Digital",
    excerpt:
      "Program fellowship baru menggandeng startup maritim untuk eksplorasi teknologi digital twin.",
    date: "Selasa, 15 Juli 2025",
    category: "Dari Meja Ketum",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: "chair-03",
    title:
      "Dari Pangkalpinang untuk Nusantara: Menguatkan Advokasi Teknis di Daerah",
    excerpt:
      "Inisiatif advokasi kolektif memastikan suara insinyur daerah hadir dalam regulasi nasional.",
    date: "Minggu, 13 Juli 2025",
    category: "Dari Meja Ketum",
    image:
      "https://images.unsplash.com/photo-1500534319212-59e94d4c529d?auto=format&fit=crop&w=800&q=80",
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
    title: "Workshop Hybrid: Pengisian FAIP SIMPoNI PII Pangkalpinang",
    date: "Jumat, 24 Oktober 2025",
    category: "Workshop",
    mode: "Hybrid",
    location: "Co-Lab PII Pangkalpinang & Zoom",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
  {
    id: "agenda-02",
    title: "Pelatihan Perancangan Sistem Tata Udara Gedung Tropis",
    date: "Senin, 10 November 2025",
    category: "Pelatihan",
    mode: "Offline",
    location: "Universitas Bangka Belitung",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
  {
    id: "agenda-03",
    title: "Workshop Nasional BKTN-PII: Reindustrialisasi Kepulauan",
    date: "Minggu, 12 Oktober 2025",
    category: "Workshop",
    mode: "Online",
    location: "Studio PII Pangkalpinang",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    link: "#",
  },
];

export const partners: PartnerItem[] = [
  { name: "PT Timah Tbk", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=PT+Timah", href: "https://www.pttimah.co.id" },
  { name: "Pelindo Regional 2", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Pelindo", href: "https://www.pelindo.co.id" },
  { name: "Universitas Bangka Belitung", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=UBB", href: "https://ubb.ac.id" },
  { name: "Politeknik Manufaktur Babel", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Polman+Babel", href: "https://polman-babel.ac.id" },
  { name: "PT Angkasa Pura II Depati Amir", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Angkasa+Pura+II", href: "https://angkasapura2.co.id" },
  { name: "PT PLN UID Babel", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=PLN+UID+Babel", href: "https://pln.co.id" },
  { name: "Bank Sumsel Babel", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Bank+Sumsel+Babel", href: "https://www.banksumselbabel.com" },
  { name: "Babel Digital Port", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Digital+Port", href: "#" },
  { name: "PT Pupuk Sriwijaya Wilayah Babel", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Pusri+Babel", href: "https://www.pusri.co.id" },
  { name: "Green Corridor Group", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Green+Corridor", href: "#" },
  { name: "Inkubator Teknologi Babel", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=Inkubator", href: "#" },
  { name: "KADIN Pangkalpinang", logo: "https://dummyimage.com/240x120/f4f6fb/032b60&text=KADIN+PKP", href: "#" },
];

export const footerContent = {
  addressLabel: "Graha Rekayasa Pangkalpinang",
  address:
    "Jl. Jenderal Ahmad Yani No. 88, Kel. Gajah Mada, Kec. Taman Sari, Pangkalpinang 33121",
  phone: "+62 812 7775 5111",
  email: "sekretariat@piipangkalpinang.or.id",
  hashtags: ["#InsinyurKompeten", "#BangsaUnggul", "#PIIPangkalpinang"],
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/piipangkalpinang" },
    {
      name: "Instagram",
      href: "https://www.instagram.com/accounts/login/?next=%2Fpii_pangkalpinang%2F&source=omni_redirect",
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
