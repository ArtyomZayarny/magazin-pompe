"use client";

import Link from "next/link";
import { X, ChevronRight } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { categories } from "@/data/categories";
import { brands } from "@/data/brands";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-left">
            <span className="text-primary font-bold">ACQUA SERVICE</span>
          </SheetTitle>
        </SheetHeader>

        <nav className="overflow-y-auto h-[calc(100vh-60px)]">
          {/* Main links */}
          <div className="p-4">
            <Link
              href="/"
              onClick={onClose}
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Acasă
            </Link>
            <Link
              href="/produse"
              onClick={onClose}
              className="block py-2 text-sm font-medium hover:text-primary transition-colors"
            >
              Toate Produsele
            </Link>
          </div>

          <Separator />

          {/* Categories */}
          <div className="p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Categorii
            </h3>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categorie/${cat.slug}`}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
              >
                {cat.name}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>

          <Separator />

          {/* Brands */}
          <div className="p-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
              Branduri Italiene
            </h3>
            {brands.map((brand) => (
              <Link
                key={brand.id}
                href={`/brand/${brand.slug}`}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-sm hover:text-primary transition-colors"
              >
                {brand.name}
                <span className="text-xs text-muted-foreground">{brand.country}</span>
              </Link>
            ))}
          </div>

          <Separator />

          {/* Info pages */}
          <div className="p-4">
            <Link
              href="/despre-noi"
              onClick={onClose}
              className="block py-2 text-sm hover:text-primary transition-colors"
            >
              Despre Noi
            </Link>
            <Link
              href="/blog"
              onClick={onClose}
              className="block py-2 text-sm hover:text-primary transition-colors"
            >
              Blog & Ghiduri
            </Link>
            <Link
              href="/contact"
              onClick={onClose}
              className="block py-2 text-sm hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
