import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Link from "next/link";
import { agendas } from "../data/home/agendas";
import { formatDateID } from "../data/utils";
export default function Page(){
  return (<div><Header /><main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Agenda PII</h1>
    <div className="grid gap-4 md:grid-cols-3">
      {agendas.map(a => (
        <div key={a.id} className="rounded-2xl border border-slate-200 p-5 shadow-sm">
          <div className="text-xs text-slate-500">{a.category} • {a.mode}</div>
          <div className="mt-1 text-sm">{formatDateID(a.date)}</div>
          <h3 className="mt-2 font-semibold">{a.title}</h3>
          <div className="mt-1 text-sm text-slate-600">{a.location}</div>
          <Link className="mt-3 inline-block text-sm text-blue-700 underline underline-offset-4" href={a.href ?? "#"}>Detail</Link>
        </div>
      ))}
    </div>
  </main><Footer /></div>);
}
