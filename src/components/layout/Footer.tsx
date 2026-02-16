import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">ACQUA SERVICE</h3>
            <p className="text-sm text-primary-foreground/70 mb-4">
              SC ACQUA SERVICE SA - Distribuitor autorizat de pompe și echipamente
              hidraulice din Italia. Din 1997, oferim soluții profesionale pentru
              alimentarea cu apă.
            </p>
            <div className="flex gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-italian-green text-white text-xs font-bold">
                IT
              </div>
              <div className="flex h-8 items-center text-xs text-primary-foreground/60">
                Partener oficial al producătorilor italieni
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Categorii Produse
            </h3>
            <ul className="space-y-2">
              {categories.slice(0, 8).map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/categorie/${cat.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Informații
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/despre-noi" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Despre Noi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Blog & Ghiduri
                </Link>
              </li>
              {brands.map((brand) => (
                <li key={brand.id}>
                  <Link
                    href={`/brand/${brand.slug}`}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/70">
                  Str. Fabrica de Glucoză nr. 6-8, Sector 2, București
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary-foreground/60" />
                <a href="tel:+40214560890" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  +40 21 456 08 90
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary-foreground/60" />
                <a href="mailto:office@acquaservice.ro" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  office@acquaservice.ro
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/70">
                  Lun - Vin: 9:00 - 17:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} SC ACQUA SERVICE SA. Toate drepturile rezervate.</p>
          <p>CUI: RO9934570 | J40/7890/1997</p>
        </div>
      </div>
    </footer>
  );
}
