"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { searchProducts } from "@/data/products";
import { formatPrice } from "@/data/products";
import Link from "next/link";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof searchProducts>>([]);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchProducts(query).slice(0, 5));
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/produse?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
      setQuery("");
    }
  }

  return (
    <div ref={ref} className="relative w-full">
      <form onSubmit={handleSubmit} className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Caută pompe, hidrofoare, accesorii..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length >= 2 && setIsOpen(true)}
          className="pl-10 pr-8"
        />
        {query && (
          <button
            type="button"
            onClick={() => { setQuery(""); setIsOpen(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </form>

      {/* Autocomplete dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 overflow-hidden">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/produse/${product.slug}`}
              onClick={() => { setIsOpen(false); setQuery(""); }}
              className="flex items-center gap-3 px-4 py-3 hover:bg-muted transition-colors"
            >
              <div className="flex-shrink-0 h-10 w-10 bg-muted rounded relative overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-1"
                  sizes="40px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{product.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {product.shortDescription}
                </p>
              </div>
              <span className="text-sm font-semibold text-primary flex-shrink-0">
                {formatPrice(product.price)}
              </span>
            </Link>
          ))}
          <Link
            href={`/produse?q=${encodeURIComponent(query)}`}
            onClick={() => { setIsOpen(false); setQuery(""); }}
            className="block px-4 py-2.5 text-sm text-center text-primary hover:bg-muted transition-colors border-t"
          >
            Vezi toate rezultatele pentru &quot;{query}&quot;
          </Link>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg z-50 p-4 text-center text-sm text-muted-foreground">
          Nu am găsit rezultate pentru &quot;{query}&quot;
        </div>
      )}
    </div>
  );
}
