
export type Article = {
  id: string;
  title: string;
  date: string; // ISO
  summary?: string;
  image: string;
  category?: string;
  views?: number;
  author?: string;
  href?: string;
};
export type Agenda = {
  id: string;
  date: string; // ISO
  category: "Workshop" | "Pelatihan" | "Seminar" | "Webinar" | "Audiensi";
  title: string;
  location: string;
  mode: "Luring" | "Daring" | "Hybrid";
  href?: string;
};
export const formatDateID = (iso: string) => {
  return new Date(iso).toLocaleDateString("id-ID", { day: "2-digit", month: "long", year: "numeric" });
};
