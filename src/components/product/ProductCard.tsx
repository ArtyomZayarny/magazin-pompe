"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCartStore } from "@/lib/cart";
import { formatPrice } from "@/data/products";
import { getBrandById } from "@/data/brands";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const brand = getBrandById(product.brandId);

  return (
    <Card className="group overflow-hidden hover:shadow-md transition-shadow">
      <Link href={`/produse/${product.slug}`}>
        <div className="aspect-square bg-muted relative flex items-center justify-center overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
          />
          {product.oldPrice && (
            <Badge className="absolute top-2 left-2 bg-destructive text-white z-10">
              -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </Badge>
          )}
          {!product.inStock && (
            <Badge variant="secondary" className="absolute top-2 right-2 z-10">
              Indisponibil
            </Badge>
          )}
        </div>
      </Link>
      <CardContent className="p-4">
        {brand && (
          <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-1">
            {brand.name}
          </p>
        )}
        <Link href={`/produse/${product.slug}`}>
          <h3 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors min-h-[2.5rem]">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between mt-3">
          <div>
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
        </div>
        <Button
          className="w-full mt-3"
          size="sm"
          onClick={() => addItem(product)}
          disabled={!product.inStock}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {product.inStock ? "Adaugă în Coș" : "Indisponibil"}
        </Button>
      </CardContent>
    </Card>
  );
}
