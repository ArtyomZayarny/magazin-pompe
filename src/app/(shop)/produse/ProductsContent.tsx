"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterSidebar, FilterState, defaultFilters } from "@/components/catalog/FilterSidebar";
import { SortSelect, SortOption } from "@/components/catalog/SortSelect";
import { Pagination } from "@/components/catalog/Pagination";
import { getAllProducts, searchProducts } from "@/data/products";

const PRODUCTS_PER_PAGE = 12;

export function ProductsContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sort, setSort] = useState<SortOption>("relevance");
  const [page, setPage] = useState(1);

  const allProducts = useMemo(() => {
    return query ? searchProducts(query) : getAllProducts();
  }, [query]);

  const filteredProducts = useMemo(() => {
    let result = [...allProducts];

    if (filters.brandIds.length > 0) {
      result = result.filter((p) => filters.brandIds.includes(p.brandId));
    }
    if (filters.minPrice) {
      result = result.filter((p) => p.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= Number(filters.maxPrice));
    }
    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

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
  }, [allProducts, filters, sort]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (page - 1) * PRODUCTS_PER_PAGE,
    page * PRODUCTS_PER_PAGE
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground mb-6">
        <a href="/" className="hover:text-primary">Acasă</a>
        <span className="mx-2">/</span>
        <span className="text-foreground">
          {query ? `Rezultate pentru "${query}"` : "Toate Produsele"}
        </span>
      </nav>

      <h1 className="text-2xl md:text-3xl font-bold mb-6">
        {query ? `Rezultate pentru "${query}"` : "Toate Produsele"}
      </h1>

      <div className="flex gap-8">
        {/* Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <FilterSidebar
            filters={filters}
            onFilterChange={(f) => { setFilters(f); setPage(1); }}
            productCount={filteredProducts.length}
          />
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-muted-foreground">
              {filteredProducts.length} produse
            </p>
            <SortSelect value={sort} onChange={(s) => { setSort(s); setPage(1); }} />
          </div>

          {paginatedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {paginatedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">
                Nu am găsit produse care să corespundă criteriilor selectate.
              </p>
              <Button onClick={() => setFilters(defaultFilters)}>
                Resetează Filtrele
              </Button>
            </div>
          )}

          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
