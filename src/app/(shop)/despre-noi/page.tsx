import Link from "next/link";
import { Building2, Users, Calendar, Globe, Award, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { brands } from "@/data/brands";

export const metadata = {
  title: "Despre Noi",
  description: "SC ACQUA SERVICE SA - Distribuitor autorizat de pompe și echipamente hidraulice din Italia, din 1997. Capital italo-româno-portughez.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-brand-green/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Despre ACQUA SERVICE</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Din 1997, suntem podul dintre excelența italiană în producția de pompe
            și piața românească. Distribuitor autorizat cu capital italo-româno-portughez.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: Calendar, label: "Fondat în", value: "1997" },
            { icon: Users, label: "Echipa", value: "15 specialiști" },
            { icon: Globe, label: "Capital", value: "Italo-Român" },
            { icon: Building2, label: "Sediu", value: "București" },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6 text-center">
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Story */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-bold mb-6">Povestea Noastră</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              SC ACQUA SERVICE SA a fost înființată în 1997 cu viziunea de a aduce cele
              mai performante echipamente hidraulice italiene pe piața românească. Cu un
              capital mixt italo-româno-portughez, compania a construit parteneriate de
              lungă durată cu cei mai respectați producători din industria pompelor.
            </p>
            <p>
              De-a lungul anilor, am devenit punctul de referință pentru soluții profesionale
              de pompare în România. Gama noastră include pompe submersibile, hidrofoare,
              electropompe centrifuge, pompe de drenaj, automatizări și accesorii de la
              branduri de renume mondial precum Pedrollo, SAER și Caprari.
            </p>
            <p>
              Ce ne diferențiază este combinația unică de produse italiene de cea mai înaltă
              calitate cu expertiză tehnică locală. Echipa noastră de 15 specialiști oferă
              consultanță personalizată, service autorizat și suport post-vânzare complet.
            </p>
            <p>
              Cu o cifră de afaceri de aproximativ 14 milioane RON și un showroom în
              București, deservim atât clienți individuali care au nevoie de un hidrofor
              pentru casă, cât și companii industriale cu cerințe complexe de pompare.
            </p>
          </div>
        </div>

        {/* Why choose us */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">De Ce Să Ne Alegi</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Calitate Italiană Garantată</h3>
                <p className="text-sm text-muted-foreground">
                  Toate produsele noastre sunt fabricate de cei mai respectați producători
                  italieni, cu certificate de calitate și garanție oficială.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Wrench className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Service și Suport Tehnic</h3>
                <p className="text-sm text-muted-foreground">
                  Oferim service autorizat, consultanță tehnică gratuită și suport complet
                  în alegerea și instalarea echipamentelor.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-semibold mb-2">Experiență de 27+ Ani</h3>
                <p className="text-sm text-muted-foreground">
                  Cu peste două decenii de experiență pe piață, cunoaștem în profunzime
                  nevoile clienților și specificul instalațiilor din România.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold mb-8">Partenerii Noștri Italieni</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {brands.map((brand) => (
              <Link key={brand.id} href={`/brand/${brand.slug}`}>
                <Card className="hover:shadow-md transition-all hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    <span className="text-2xl font-bold text-primary">{brand.name}</span>
                    <p className="text-sm text-muted-foreground mt-2">{brand.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Din {brand.founded} &middot; {brand.country}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Hai Să Colaborăm</h2>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Fie că ești un proprietar care are nevoie de un hidrofor, sau o companie
            cu proiecte industriale, suntem pregătiți să te ajutăm.
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/produse">Vezi Produsele</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
