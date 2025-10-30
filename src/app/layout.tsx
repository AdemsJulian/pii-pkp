﻿import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://piipangkalpinang.or.id"),
  title: {
    default: "PII PKP",
    template: "%s | PII PKP",
  },
  description:
    "Situs resmi PII Cabang Pangkalpinang: berita, agenda, layanan keanggotaan, sertifikasi, dan advokasi insinyur di Bangka Belitung.",
  keywords: [
    "PII Pangkalpinang",
    "Persatuan Insinyur Indonesia",
    "Insinyur Bangka Belitung",
    "Program Profesi Insinyur",
    "Sertifikasi Insinyur",
    "Agenda PII",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://piipangkalpinang.or.id",
    title: "PII PKP",
    description:
      "Portal resmi PII Pangkalpinang dengan berita, agenda, layanan, dan jejaring insinyur Bangka Belitung.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PII Pangkalpinang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@pii_pangkalpinang",
    title: "PII PKP",
    description:
      "Portal resmi PII Pangkalpinang dengan berita, agenda, layanan, dan jejaring insinyur Bangka Belitung.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo-pii-black.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} bg-[#f6f8fc] font-inter text-brand-midnight`}>
        <Header />
        <main className="flex min-h-screen flex-col pt-[var(--header-height)]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

