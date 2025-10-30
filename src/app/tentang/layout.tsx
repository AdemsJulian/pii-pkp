import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "PII PKP | Tentang",
    template: "%s | PII PKP",
  },
  description:
    "Sejarah, visi-misi, dan struktur kepengurusan Persatuan Insinyur Indonesia Cabang Pangkalpinang.",
};

export default function TentangLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
