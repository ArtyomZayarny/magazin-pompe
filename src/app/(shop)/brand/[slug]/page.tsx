"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Award, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getBrandBySlug, brands } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";

export default function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const brand = getBrandBySlug(slug);

  if (!brand) notFound();

  const products = getProductsByBrand(brand.id);
  const otherBrands = brands.filter((b) => b.id !== brand.id);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-brand-green/5">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <nav className="text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">Acasă</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{brand.name}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex gap-0.5">
                  <div className="w-2 h-5 bg-italian-green rounded-sm" />
                  <div className="w-2 h-5 bg-white border rounded-sm" />
                  <div className="w-2 h-5 bg-italian-red rounded-sm" />
                </div>
                <Badge variant="secondary">Made in Italy</Badge>
              </div>
              {brand.logo && (
                <div className="relative h-16 w-48 mb-4">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    fill
                    className="object-contain object-left"
                    sizes="192px"
                  />
                </div>
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{brand.name}</h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                {brand.description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Fondat în {brand.founded}
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  {brand.certifications.join(", ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* About brand */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-2xl font-bold mb-6">Despre {brand.name}</h2>
          <div className="prose prose-slate max-w-none">
            {brand.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Certificări și Standarde</h2>
          <div className="flex flex-wrap gap-3">
            {brand.certifications.map((cert) => (
              <Card key={cert}>
                <CardContent className="p-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Produse {brand.name} ({products.length})
          </h2>
          {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              Catalogul complet {brand.name} va fi disponibil în curând.{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contactați-ne
              </Link>{" "}
              pentru a solicita produse specifice.
            </p>
          )}
        </div>

        <Separator className="mb-16" />

        {/* Other brands */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Alte Branduri Italiene</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {otherBrands.map((b) => (
              <Link key={b.id} href={`/brand/${b.slug}`}>
                <Card className="hover:shadow-md transition-all hover:border-primary/30">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="flex gap-0.5 flex-shrink-0">
                      <div className="w-1.5 h-4 bg-italian-green rounded-sm" />
                      <div className="w-1.5 h-4 bg-white border rounded-sm" />
                      <div className="w-1.5 h-4 bg-italian-red rounded-sm" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{b.name}</h3>
                      <p className="text-sm text-muted-foreground">{b.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
