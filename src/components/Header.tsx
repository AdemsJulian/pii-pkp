
"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`header-sticky ${shrink ? "shrink" : ""} py-3`}
      aria-label="Navigasi utama"
    >
      <div className="container flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label="Beranda PII Pangkalpinang">
          <Image src="https://www.pii.or.id/assets/img/Logo-Header-PII_rev.png" alt="Logo Persatuan Insinyur Indonesia" width={160} height={40} priority />
          <span className="font-semibold">PII Pangkalpinang</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/">Beranda</Link>
          <div className="group relative">
            <button className="inline-flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Tentang PII
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              <Link className="block rounded-xl px-3 py-2 hover:bg-slate-50" href="/tentang/sejarah">Sejarah</Link>
              <Link className="block rounded-xl px-3 py-2 hover:bg-slate-50" href="/tentang/visi-misi">Visi Misi</Link>
              <Link className="block rounded-xl px-3 py-2 hover:bg-slate-50" href="/tentang/struktur-pengurus">Struktur Pengurus Pangkalpinang</Link>
            </div>
          </div>
          <div className="group relative">
            <button className="inline-flex items-center gap-1" aria-haspopup="true" aria-expanded="false">
              Kabar
            </button>
            <div className="invisible absolute left-0 top-full mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition group-hover:visible group-hover:opacity-100">
              <Link className="block rounded-xl px-3 py-2 hover:bg-slate-50" href="/kabar/berita">Berita</Link>
              <Link className="block rounded-xl px-3 py-2 hover:bg-slate-50" href="/kabar/dari-meja-ketum">Dari Meja Ketum</Link>
              <Link className="block rounded-xl px-3 py-2 hover:bg-slate-50" href="/kabar/dari-insinyur">Dari Insinyur</Link>
            </div>
          </div>
          <Link href="/agenda">Agenda</Link>
          <Link href="/layanan">Layanan</Link>
          <Link href="/dokumen">Dokumen</Link>
          <button
            className="rounded-full border px-3 py-1 text-xs"
            aria-label="Ganti bahasa"
            title="Ganti bahasa"
          >
            ID
          </button>
        </nav>
        <button
          className="md:hidden rounded-full border p-2"
          aria-label="Buka menu"
          onClick={() => setOpen(true)}
        >
          <Menu />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40" aria-hidden="true" onClick={() => setOpen(false)} />
      )}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[88%] max-w-xs bg-white p-5 shadow-2xl transition-transform md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu seluler"
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="font-semibold">Menu</span>
          <button className="rounded-full border px-3 py-1 text-xs" aria-label="Ganti bahasa">ID</button>
        </div>
        <nav className="flex flex-col gap-2 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Beranda</Link>
          <details>
            <summary className="cursor-pointer">Tentang PII</summary>
            <div className="ml-3 mt-1 flex flex-col gap-1">
              <Link href="/tentang/sejarah" onClick={() => setOpen(false)}>Sejarah</Link>
              <Link href="/tentang/visi-misi" onClick={() => setOpen(false)}>Visi Misi</Link>
              <Link href="/tentang/struktur-pengurus" onClick={() => setOpen(false)}>Struktur Pengurus Pangkalpinang</Link>
            </div>
          </details>
          <details>
            <summary className="cursor-pointer">Kabar</summary>
            <div className="ml-3 mt-1 flex flex-col gap-1">
              <Link href="/kabar/berita" onClick={() => setOpen(false)}>Berita</Link>
              <Link href="/kabar/dari-meja-ketum" onClick={() => setOpen(false)}>Dari Meja Ketum</Link>
              <Link href="/kabar/dari-insinyur" onClick={() => setOpen(false)}>Dari Insinyur</Link>
            </div>
          </details>
          <Link href="/agenda" onClick={() => setOpen(false)}>Agenda</Link>
          <Link href="/layanan" onClick={() => setOpen(false)}>Layanan</Link>
          <Link href="/dokumen" onClick={() => setOpen(false)}>Dokumen</Link>
        </nav>
      </aside>
    </header>
  );
}
