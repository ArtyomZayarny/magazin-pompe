"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, ShoppingCart, Menu, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/cart";
import { categories } from "@/data/categories";
import { MobileMenu } from "./MobileMenu";
import { SearchBar } from "@/components/catalog/SearchBar";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const totalItems = useCartStore((s) => s.getTotalItems());
  const toggleCart = useCartStore((s) => s.toggleCart);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto flex items-center justify-between px-4 py-1.5 text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+40214560890" className="flex items-center gap-1.5 hover:opacity-80">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+40 21 456 08 90</span>
            </a>
            <a href="mailto:office@acquaservice.ro" className="flex items-center gap-1.5 hover:opacity-80">
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">office@acquaservice.ro</span>
            </a>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <span className="hidden md:inline">Lun - Vin: 9:00 - 17:00</span>
            <span className="hidden lg:inline">|</span>
            <span className="hidden lg:inline">Distribuitor autorizat Italia</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4 py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">ACQUA SERVICE</span>
              <span className="text-[10px] tracking-wider text-muted-foreground">
                MAGAZIN DE POMPE
              </span>
            </div>
          </Link>

          {/* Search - desktop */}
          <div className="hidden md:flex flex-1 max-w-xl">
            <SearchBar />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Cart */}
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={toggleCart}
              aria-label="Coș de cumpărături"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-[10px]">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Mobile menu toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Meniu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search - mobile */}
        <div className="md:hidden pb-3">
          <SearchBar />
        </div>
      </div>

      {/* Category navigation - desktop */}
      <nav className="hidden md:block border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-1 overflow-x-auto py-0">
            <li>
              <Link
                href="/produse"
                className="inline-flex items-center px-3 py-2.5 text-sm font-medium hover:text-primary transition-colors"
              >
                Toate Produsele
              </Link>
            </li>
            {categories.slice(0, 8).map((cat) => (
              <li key={cat.id}>
                <Link
                  href={`/categorie/${cat.slug}`}
                  className="inline-flex items-center px-3 py-2.5 text-sm hover:text-primary transition-colors whitespace-nowrap"
                >
                  {cat.name}
                </Link>
              </li>
            ))}
            <li className="relative group">
              <button className="inline-flex items-center gap-1 px-3 py-2.5 text-sm hover:text-primary transition-colors">
                Mai multe
                <ChevronDown className="h-3.5 w-3.5" />
              </button>
              <div className="absolute left-0 top-full hidden group-hover:block bg-white border rounded-md shadow-lg py-1 min-w-[200px] z-50">
                {categories.slice(8).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/categorie/${cat.slug}`}
                    className="block px-4 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="ml-auto">
              <Link
                href="/brand/pedrollo"
                className="inline-flex items-center px-3 py-2.5 text-sm font-medium text-brand-green hover:opacity-80 transition-colors"
              >
                Branduri Italiene
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      <MobileMenu open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
}
