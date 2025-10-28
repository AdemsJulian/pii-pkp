import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Page(){
  return (<div><Header /><main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Dokumen</h1>
    <p className="text-slate-600">Repositori dokumen resmi PII Cabang Pangkalpinang akan tersedia di sini (SOP, pedoman, dan formulir).</p>
  </main><Footer /></div>);
}
