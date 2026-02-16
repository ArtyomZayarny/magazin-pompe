"use client";

import { use, useState, useMemo } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCategoryBySlug } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { SortSelect, SortOption } from "@/components/catalog/SortSelect";

export default function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const category = getCategoryBySlug(slug);

  if (!category) notFound();

  const [sort, setSort] = useState<SortOption>("relevance");
  const products = getProductsByCategory(category.id);

  const sorted = useMemo(() => {
    const result = [...products];
    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
    }
    return result;
  }, [products, sort]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary">Acasă</Link>
        <span className="mx-2">/</span>
        <Link href="/produse" className="hover:text-primary">Produse</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{category.name}</span>
      </nav>

      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold">{category.name}</h1>
        <p className="text-muted-foreground mt-2">{category.description}</p>
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="text-sm text-muted-foreground">
          {sorted.length} {sorted.length === 1 ? "produs" : "produse"}
        </p>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      {sorted.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sorted.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-muted-foreground">
          <p>Momentan nu avem produse în această categorie.</p>
          <p className="mt-2">
            <Link href="/contact" className="text-primary hover:underline">
              Contactați-ne
            </Link>{" "}
            pentru informații.
          </p>
        </div>
      )}
    </div>
  );
}
