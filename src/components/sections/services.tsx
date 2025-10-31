import Link from "next/link";
import { services } from "@/data/site-content";

export function ServicesSection() {
  const localSupport = [
    {
      title: "Klinik Administrasi Cabang",
      description:
        "Sekretariat cabang memeriksa kelengkapan berkas anggota sebelum dikirim ke portal nasional.",
      points: [
        "Checklist SKK/SKIP, PPI, dan keanggotaan sesuai standar pusat",
        "Pendampingan upload dokumen di updmember & sertifikasi PII",
        "Sesi tatap muka/daring setiap Selasa dan Kamis",
      ],
      ctaLabel: "Atur Jadwal Klinik",
      ctaHref: "https://wa.me/6281806701775",
    },
    {
      title: "Mentoring & Testimoni Alumni",
      description:
        "IPM/IPU senior berbagi pengalaman mengikuti PPI dan sidang sertifikasi dari perspektif Bangka Belitung.",
      points: [
        "Forum bulanan daring/luring lintas sektor",
        "Review narasi portofolio proyek strategis daerah",
        "Akses jaringan alumni untuk simulasi wawancara",
      ],
      ctaLabel: "Gabung Forum Alumni",
      ctaHref: "mailto:sekretariat@piipangkalpinang.or.id",
    },
    {
      title: "Integrasi Proyek Daerah",
      description:
        "Menghubungkan kebutuhan kompetensi proyek pemerintah/industri dengan layanan resmi PII pusat.",
      points: [
        "Pemetaan kebutuhan ahli untuk proyek hilirisasi & pesisir",
        "Pengawalan MoU dengan sekretariat pusat",
        "Pelaporan berkala progres anggota kepada Dewan Pusat",
      ],
      ctaLabel: "Hubungi Sekretariat",
      ctaHref: "https://wa.me/6281806701775",
    },
  ];

  return (
    <section
      id="layanan"
      className="section-spacing bg-brand-fog/40"
      aria-labelledby="layanan-heading"
    >
      <div className="container space-y-12">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-blue/80">
              Layanan PII Pangkalpinang
            </p>
            <h2
              id="layanan-heading"
              className="text-3xl font-semibold text-brand-midnight sm:text-4xl"
            >
              Pendampingan profesional bagi insinyur Bangka Belitung
            </h2>
          </div>
          <p className="max-w-xl text-base text-brand-slate">
            PII Pangkalpinang menjadi gerbang komunikasi antara anggota di
            Bangka Belitung dan pengelola layanan resmi di PII pusat. Cabang
            mendukung persiapan dokumen, mentoring, hingga koordinasi proyek
            strategis sebelum diajukan ke Jakarta.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            {localSupport.map((item) => {
              const external = item.ctaHref.startsWith("http");
              return (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[28px] border border-brand-fog bg-white/90 p-7 shadow-card"
                >
                  <h3 className="text-lg font-semibold text-brand-midnight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-brand-slate">{item.description}</p>
                  <ul className="mt-5 space-y-3 text-sm text-brand-midnight/90">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-blue" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={item.ctaHref}
                    prefetch={false}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-brand-blue transition hover:text-brand-midnight"
                  >
                    {item.ctaLabel}
                  </Link>
                </article>
              );
            })}
          </div>

          <aside className="rounded-[32px] bg-brand-midnight px-6 py-8 text-white shadow-card">
            <h3 className="text-lg font-semibold">Akses Layanan PII Pusat</h3>
            <p className="mt-3 text-sm text-white/80">
              Keanggotaan, PPI, sertifikasi, dan advokasi resmi diproses oleh
              PII pusat. Cabang menyediakan jalur konsultasi awal sebelum Anda
              mengajukan lewat sistem nasional berikut.
            </p>

            <ol className="mt-6 space-y-5">
              {services.map((service, index) => {
                const external =
                  service.href.startsWith("http") ||
                  service.href.startsWith("https");
                return (
                  <li
                    key={service.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="space-y-2">
                        <h4 className="text-base font-semibold text-white">
                          {service.title}
                        </h4>
                        <p className="text-sm text-white/80">{service.description}</p>
                        <ul className="space-y-1 text-xs text-white/70">
                          {service.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                              <span>-</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                        <Link
                          href={service.href}
                          prefetch={false}
                          target={external ? "_blank" : undefined}
                          rel={external ? "noopener noreferrer" : undefined}
                          className="inline-flex items-center text-xs font-semibold text-brand-sky transition hover:text-white"
                        >
                          {service.ctaLabel}
                        </Link>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
