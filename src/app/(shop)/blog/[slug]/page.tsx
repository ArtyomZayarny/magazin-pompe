import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogContent: Record<string, { title: string; category: string; date: string; readTime: string; content: string }> = {
  "cum-sa-alegi-pompa-submersibila": {
    title: "Cum Să Alegi Pompa Submersibilă Potrivită",
    category: "Ghid de Alegere",
    date: "2025-02-10",
    readTime: "8 min",
    content: `Alegerea pompei submersibile potrivite este una dintre cele mai importante decizii atunci când amenajezi un sistem de alimentare cu apă dintr-un puț forat. O alegere greșită poate duce la performanțe slabe, consum crescut de energie sau chiar la deteriorarea prematură a echipamentului.

## Parametrii Esențiali

### 1. Adâncimea Puțului
Primul lucru pe care trebuie să-l cunoști este adâncimea puțului și nivelul static/dinamic al apei. Pompa trebuie instalată sub nivelul dinamic al apei pentru a funcționa corect.

### 2. Debitul Necesar
Debitul se calculează în funcție de numărul de puncte de consum. Pentru o casă cu 1-2 băi, un debit de 2-4 m³/h este de obicei suficient. Pentru irigații, debitul necesar depinde de suprafața și tipul sistemului.

### 3. Înălțimea de Pompare
Aceasta include: adâncimea de instalare + înălțimea până la punctul cel mai înalt de consum + pierderile de sarcină din conducte. Adaugă 15-20% marjă de siguranță.

### 4. Diametrul Puțului
Puțurile standard au diametrul de 4" (100mm). Verifică diametrul exact înainte de a comanda pompa.

## Recomandările Noastre

- **Pentru puțuri de până la 50m:** Pedrollo 4SR 2/13 (0.75 kW) — raport excelent calitate-preț
- **Pentru puțuri de 50-100m:** Pedrollo 4SR 4/18 (1.5 kW) — debit și presiune superioare
- **Pentru aplicații industriale:** Caprari E4XP 50/6 (2.2 kW) — oțel inoxidabil AISI 316

## Greșeli Frecvente

1. **Supradimensionarea pompei** — o pompă prea puternică se uzează mai repede
2. **Ignorarea pierderilor de sarcină** — conductele lungi și coturi reduc performanța
3. **Lipsa protecției** — instalează întotdeauna un presostat și o protecție la funcționare în gol`,
  },
  "hidrofor-sau-pompa": {
    title: "Hidrofor sau Pompă? Ce Soluție Este Potrivită Pentru Tine",
    category: "Ghid de Alegere",
    date: "2025-01-25",
    readTime: "6 min",
    content: `Mulți clienți ne întreabă: "Am nevoie de hidrofor sau de pompă?" Răspunsul depinde de câțiva factori simpli pe care îi vom explica în acest ghid.

## Ce Este un Hidrofor?

Un hidrofor este un sistem complet format din: pompă de suprafață + vas de expansiune cu membrană + presostat. Funcționează automat: pompa pornește când deschizi robinetul și se oprește când îl închizi.

## Când Ai Nevoie de Hidrofor?

- Alimentarea cu apă a unei case din fântână sau puț de mică adâncime (max 8-9m)
- Creșterea presiunii în rețeaua de apă existentă
- Irigarea grădinii cu presiune constantă

## Când Este Suficientă o Pompă Simplă?

- Transfer de apă dintr-un recipient în altul
- Golirea unei piscine sau a unui subsol inundat (pompă de drenaj)
- Alimentarea cu apă din puț adânc (pompă submersibilă + vas de expansiune separat)

## Recomandări

Pentru majoritatea caselor, recomandăm **hidroforul Pedrollo JSWm 2AX cu vas de 24L** — este cel mai vândut model din gama noastră, fiabil și silențios.

Dacă ai un puț cu adâncimea mai mare de 9 metri, vei avea nevoie de o pompă submersibilă (nu poate fi folosit un hidrofor clasic).`,
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Articol în Pregătire</h1>
        <p className="text-muted-foreground mb-6">
          Acest articol va fi disponibil în curând. Reveniti mai târziu.
        </p>
        <Button asChild>
          <Link href="/blog">Înapoi la Blog</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Acasă</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-primary">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{post.title}</span>
      </nav>

      <article className="max-w-3xl mx-auto">
        <Button asChild variant="ghost" size="sm" className="mb-6">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Înapoi la Blog
          </Link>
        </Button>

        <header className="mb-8">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString("ro-RO", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {post.readTime} citire
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        </header>

        <div className="prose prose-slate max-w-none">
          {post.content.split("\n\n").map((block, i) => {
            if (block.startsWith("## ")) {
              return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{block.replace("## ", "")}</h2>;
            }
            if (block.startsWith("### ")) {
              return <h3 key={i} className="text-lg font-semibold mt-6 mb-2">{block.replace("### ", "")}</h3>;
            }
            if (block.includes("\n- ")) {
              const lines = block.split("\n").filter(Boolean);
              return (
                <ul key={i} className="list-disc pl-6 space-y-2 my-4">
                  {lines.map((line, j) => (
                    <li key={j} className="text-muted-foreground">
                      {line.replace(/^- /, "").replace(/^\d+\. /, "")}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.includes("\n1. ")) {
              const lines = block.split("\n").filter(Boolean);
              return (
                <ol key={i} className="list-decimal pl-6 space-y-2 my-4">
                  {lines.map((line, j) => (
                    <li key={j} className="text-muted-foreground">
                      {line.replace(/^\d+\. /, "")}
                    </li>
                  ))}
                </ol>
              );
            }
            return <p key={i} className="text-muted-foreground leading-relaxed mb-4">{block}</p>;
          })}
        </div>

        <div className="mt-12 p-6 bg-muted/30 rounded-lg border text-center">
          <h3 className="font-semibold mb-2">Ai nevoie de ajutor în alegerea pompei?</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Specialiștii noștri sunt pregătiți să te consilieze gratuit.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/produse">Vezi Produsele</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
