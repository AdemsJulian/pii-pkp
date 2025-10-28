import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Page(){
  return (<div><Header /><main className="container py-10">
    <h1 className="text-2xl font-semibold mb-4">Sejarah</h1>
    <p className="text-slate-600">Sejarah singkat berdirinya PII dan perkembangan Cabang Pangkalpinang.</p>
  </main><Footer /></div>);
}
