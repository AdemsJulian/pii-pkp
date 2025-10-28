
import Link from "next/link";
import Image from "next/image";

export default function BannerCTA() {
  return (
    <section aria-label="Kampanye unggulan" className="py-8">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl">
          <Image src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2000&auto=format&fit=crop" alt="Kota Pangkalpinang malam hari" width={1600} height={600} className="h-64 w-full object-cover md:h-80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/10" aria-hidden="true" />
          <div className="absolute inset-0 flex items-center">
            <div className="p-6 md:p-10 text-white max-w-xl">
              <h3 className="text-2xl font-semibold">Akselerasi Infrastruktur Pangkalpinang</h3>
              <p className="mt-2 text-sm opacity-95">Dukung kampanye PII untuk desain, standar, dan eksekusi proyek yang andal dan berkelanjutan.</p>
              <Link href="/kampanye/infrastruktur" className="mt-4 inline-block rounded-full bg-blue-600 px-5 py-3 text-sm font-medium hover:bg-blue-700">Ikut Terlibat</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
