
import Image from "next/image";
import Link from "next/link";
import { footer } from "../data/home/footer";

export default function Footer(){
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white" aria-labelledby="footer-heading">
      <div className="container py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="max-w-md">
            <div className="flex items-center gap-3">
              <Image src="/logo-pii-black.svg" alt="Logo PII Hitam" width={36} height={36} />
              <span className="font-semibold">PII Pangkalpinang</span>
            </div>
            <p className="mt-4 text-sm text-slate-600">{footer.address}</p>
            <p className="mt-2 text-sm text-slate-600">WA: {footer.whatsapp} • Email: {footer.email}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-500">
              {footer.hashtags.map((h) => (<span key={h}>{h}</span>))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm md:gap-8">
            <div>
              <h3 className="font-semibold">Tautan</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href={footer.privacy}>Privacy Policy</Link></li>
                <li><Link href={footer.terms}>Terms of Service</Link></li>
                <li><Link href={footer.cookies}>Cookies Settings</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Sosial</h3>
              <ul className="mt-3 space-y-2">
                <li><Link href={footer.socials.facebook} target="_blank" rel="noopener noreferrer">Facebook</Link></li>
                <li><Link href={footer.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</Link></li>
                <li><Link href={footer.socials.x} target="_blank" rel="noopener noreferrer">X</Link></li>
                <li><Link href={footer.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Link></li>
                <li><Link href={footer.socials.youtube} target="_blank" rel="noopener noreferrer">YouTube</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 text-xs text-slate-500">{footer.copyright}</div>
      </div>
    </footer>
  );
}
