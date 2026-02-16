import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Blog & Ghiduri",
  description: "Ghiduri de alegere, articole tehnice și sfaturi pentru pompe, hidrofoare și echipamente hidraulice.",
};

const blogPosts = [
  {
    slug: "cum-sa-alegi-pompa-submersibila",
    title: "Cum Să Alegi Pompa Submersibilă Potrivită",
    excerpt:
      "Ghid complet pentru alegerea pompei submersibile în funcție de adâncimea puțului, debitul necesar și tipul de utilizare. Afla ce parametri contează cu adevărat.",
    category: "Ghid de Alegere",
    date: "2025-02-10",
    readTime: "8 min",
  },
  {
    slug: "hidrofor-sau-pompa",
    title: "Hidrofor sau Pompă? Ce Soluție Este Potrivită Pentru Tine",
    excerpt:
      "Diferențele esențiale între un hidrofor și o pompă de suprafață. Când ai nevoie de vas de expansiune și presostat, și când este suficientă o pompă simplă.",
    category: "Ghid de Alegere",
    date: "2025-01-25",
    readTime: "6 min",
  },
  {
    slug: "ghid-intretinere-pompe",
    title: "Ghid de Întreținere pentru Pompe și Hidrofoare",
    excerpt:
      "Sfaturi practice pentru mentenanța preventivă a pompelor și hidrofoarelor. Cum să prelungești durata de viață a echipamentului și să eviți reparațiile costisitoare.",
    category: "Mentenanță",
    date: "2025-01-15",
    readTime: "10 min",
  },
  {
    slug: "pedrollo-povestea-brandului",
    title: "Pedrollo: Povestea Celui Mai Mare Producător Italian de Pompe",
    excerpt:
      "De la un mic atelier în Verona la lider mondial cu 2 milioane de pompe pe an. Descoperă filozofia Made in Italy care stă la baza fiecărui produs Pedrollo.",
    category: "Branduri",
    date: "2025-01-05",
    readTime: "5 min",
  },
  {
    slug: "pompe-irigatii-agricultura",
    title: "Pompe pentru Irigații în Agricultură: Ghid Complet",
    excerpt:
      "Cum să alegi sistemul de pompare potrivit pentru irigații agricole. Tipuri de pompe, calcul debit și presiune, soluții pentru diferite suprafețe.",
    category: "Ghid de Alegere",
    date: "2024-12-20",
    readTime: "12 min",
  },
  {
    slug: "eficienta-energetica-pompe",
    title: "Eficiența Energetică a Pompelor: Cum Să Reduci Costurile",
    excerpt:
      "Cum pompele eficiente energetic pot reduce facturile cu până la 30%. Tehnologii moderne, variatore de frecvență și dimensionarea corectă a instalației.",
    category: "Tehnic",
    date: "2024-12-10",
    readTime: "7 min",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 via-background to-brand-green/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog & Ghiduri</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Articole tehnice, ghiduri de alegere și sfaturi practice pentru pompe,
            hidrofoare și echipamente hidraulice.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="group hover:shadow-md transition-all hover:border-primary/30 h-full">
                <div className="aspect-[16/9] bg-muted rounded-t-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-muted-foreground/20">Blog</span>
                </div>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("ro-RO", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                    {post.excerpt}
                  </p>
                  <span className="text-sm text-primary font-medium flex items-center gap-1">
                    Citește articolul
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
