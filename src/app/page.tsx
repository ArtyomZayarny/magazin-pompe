"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Truck, Wrench, Award, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";
import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function HomePage() {
  const featuredProducts = products.filter((p) => p.oldPrice).slice(0, 4);
  const newestProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-brand-green/5">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-brand-green/10 text-brand-green border-brand-green/20">
              Distribuitor autorizat din 1997
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
              Pompe și echipamente hidraulice{" "}
              <span className="text-primary">Made in Italy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Distribuitor oficial Pedrollo, SAER și Caprari în România.
              Pompe submersibile, hidrofoare și accesorii cu garanție și suport tehnic profesional.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/produse">
                  Vezi Catalogul
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  Solicită Consultanță
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Italian quality strip */}
      <section className="border-y bg-muted/30">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground overflow-x-auto">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <div className="flex gap-0.5">
                <div className="w-2 h-4 bg-italian-green rounded-sm" />
                <div className="w-2 h-4 bg-white border rounded-sm" />
                <div className="w-2 h-4 bg-italian-red rounded-sm" />
              </div>
              <span className="font-medium">Calitate Italiană</span>
            </div>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline whitespace-nowrap">Pedrollo &middot; SAER &middot; Caprari</span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden lg:inline whitespace-nowrap">Peste 2.000.000 pompe fabricate anual</span>
          </div>
        </div>
      </section>

      {/* Categories grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Categorii Produse</h2>
            <p className="text-muted-foreground mt-1">
              Găsește pompa potrivită pentru nevoile tale
            </p>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex">
            <Link href="/produse">
              Vezi tot
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} href={`/categorie/${cat.slug}`}>
              <Card className="group hover:shadow-md transition-all hover:border-primary/30 h-full">
                <CardContent className="p-4 text-center">
                  <div className="h-24 flex items-center justify-center mb-3 relative overflow-hidden rounded-md bg-muted/50">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                  <h3 className="text-sm font-medium group-hover:text-primary transition-colors">
                    {cat.name}
                  </h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      {featuredProducts.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Oferte Speciale</h2>
                <p className="text-muted-foreground mt-1">
                  Produse la prețuri reduse
                </p>
              </div>
              <Button asChild variant="ghost" className="hidden md:flex">
                <Link href="/produse">
                  Vezi tot
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {featuredProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Brands section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">Branduri Italiene de Prestigiu</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Suntem distribuitor autorizat al celor mai respectați producători italieni
            de pompe și echipamente hidraulice
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Link key={brand.id} href={`/brand/${brand.slug}`}>
              <Card className="group hover:shadow-lg transition-all hover:border-primary/30 h-full">
                <CardContent className="p-6 text-center">
                  <div className="h-24 flex items-center justify-center mb-4 relative">
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        width={160}
                        height={60}
                        className="object-contain group-hover:scale-105 transition-transform"
                      />
                    ) : (
                      <span className="text-3xl font-bold text-primary group-hover:scale-105 transition-transform inline-block">
                        {brand.name}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-3">
                    <div className="w-1.5 h-3 bg-italian-green rounded-sm" />
                    <div className="w-1.5 h-3 bg-white border rounded-sm" />
                    <div className="w-1.5 h-3 bg-italian-red rounded-sm" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {brand.description}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Fondat în {brand.founded} &middot; {brand.country}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* USPs */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Award className="h-10 w-10 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-1">Calitate Italiană</h3>
              <p className="text-sm opacity-70">
                Produse fabricate 100% în Italia
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-10 w-10 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-1">Garanție Oficială</h3>
              <p className="text-sm opacity-70">
                Garanție completă de la producător
              </p>
            </div>
            <div className="text-center">
              <Wrench className="h-10 w-10 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-1">Service Autorizat</h3>
              <p className="text-sm opacity-70">
                Reparații și mentenanță profesională
              </p>
            </div>
            <div className="text-center">
              <Truck className="h-10 w-10 mx-auto mb-3 opacity-80" />
              <h3 className="font-semibold mb-1">Livrare Rapidă</h3>
              <p className="text-sm opacity-70">
                Livrare în toată România
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Nu știi ce pompă ai nevoie?
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Echipa noastră de specialiști te poate ajuta să alegi soluția optimă
          pentru nevoile tale. Consultanță gratuită prin telefon sau email.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/contact">Solicită Consultanță</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">Citește Ghidul de Alegere</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
