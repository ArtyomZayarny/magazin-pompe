"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Phone, CheckCircle2, XCircle, ArrowLeft, Package, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProductBySlug, formatPrice } from "@/data/products";
import { getBrandById } from "@/data/brands";
import { getCategoryById } from "@/data/categories";
import { ProductSpecs } from "@/components/product/ProductSpecs";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { useCartStore } from "@/lib/cart";

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const brand = getBrandById(product.brandId);
  const category = getCategoryById(product.categoryId);
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Acasă</Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link href={`/categorie/${category.slug}`} className="hover:text-primary">
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Product image */}
        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {product.oldPrice && (
            <Badge className="absolute top-4 left-4 bg-destructive text-white text-sm px-3 py-1 z-10">
              -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </Badge>
          )}
        </div>

        {/* Product info */}
        <div>
          {brand && (
            <Link
              href={`/brand/${brand.slug}`}
              className="text-sm font-medium text-primary hover:underline uppercase tracking-wide"
            >
              {brand.name}
            </Link>
          )}
          <h1 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mb-4">
            {product.inStock ? (
              <Badge className="bg-brand-green/10 text-brand-green border-brand-green/20">
                <CheckCircle2 className="h-3.5 w-3.5 mr-1" />
                În Stoc
              </Badge>
            ) : (
              <Badge variant="secondary">
                <XCircle className="h-3.5 w-3.5 mr-1" />
                Indisponibil
              </Badge>
            )}
            <span className="text-sm text-muted-foreground">SKU: {product.sku}</span>
          </div>

          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-3xl font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-xl text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
            <span className="text-sm text-muted-foreground">(TVA inclus)</span>
          </div>

          <p className="text-muted-foreground mb-6 leading-relaxed">
            {product.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button
              size="lg"
              className="flex-1"
              onClick={() => addItem(product)}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Adaugă în Coș
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                <Phone className="h-5 w-5 mr-2" />
                Solicită Ofertă
              </Link>
            </Button>
          </div>

          <Separator className="my-6" />

          {/* Quick specs */}
          <div className="grid grid-cols-2 gap-3">
            {product.specs.slice(0, 4).map((spec, i) => (
              <div key={i} className="bg-muted/50 rounded-lg p-3">
                <p className="text-xs text-muted-foreground">{spec.label}</p>
                <p className="font-semibold">
                  {spec.value}
                  {spec.unit && <span className="text-muted-foreground font-normal ml-1">{spec.unit}</span>}
                </p>
              </div>
            ))}
          </div>

          {brand && (
            <div className="mt-6 p-4 bg-muted/30 rounded-lg border flex items-center gap-3">
              <div className="flex gap-0.5 flex-shrink-0">
                <div className="w-1.5 h-4 bg-italian-green rounded-sm" />
                <div className="w-1.5 h-4 bg-white border rounded-sm" />
                <div className="w-1.5 h-4 bg-italian-red rounded-sm" />
              </div>
              <div>
                <p className="text-sm font-medium">Fabricat de {brand.name}, {brand.country}</p>
                <p className="text-xs text-muted-foreground">
                  {brand.description}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Full specs */}
      <ProductSpecs specs={product.specs} />

      {/* Related products */}
      <RelatedProducts product={product} />
    </div>
  );
}
