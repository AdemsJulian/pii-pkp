import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Page(){
  return (<div><Header /><main className="container py-10">
    <h1 className="text-2xl font-semibold mb-4">Visi & Misi</h1>
    <ul className="list-disc pl-6 text-slate-700">
      <li>Insinyur kompeten dan berintegritas.</li>
      <li>Infrastruktur andal, layanan publik prima.</li>
      <li>Kolaborasi pemerintah–industri–kampus.</li>
    </ul>
  </main><Footer /></div>);
}
