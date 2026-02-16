"use client";

import { useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { brands } from "@/data/brands";

export interface FilterState {
  brandIds: string[];
  minPrice: string;
  maxPrice: string;
  inStockOnly: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  productCount: number;
}

export const defaultFilters: FilterState = {
  brandIds: [],
  minPrice: "",
  maxPrice: "",
  inStockOnly: false,
};

export function FilterSidebar({ filters, onFilterChange, productCount }: FilterSidebarProps) {
  const hasActiveFilters =
    filters.brandIds.length > 0 ||
    filters.minPrice !== "" ||
    filters.maxPrice !== "" ||
    filters.inStockOnly;

  function toggleBrand(brandId: string) {
    const next = filters.brandIds.includes(brandId)
      ? filters.brandIds.filter((id) => id !== brandId)
      : [...filters.brandIds, brandId];
    onFilterChange({ ...filters, brandIds: next });
  }

  return (
    <aside className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filtre
        </h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onFilterChange(defaultFilters)}
            className="text-xs"
          >
            <X className="h-3 w-3 mr-1" />
            Resetează
          </Button>
        )}
      </div>

      <p className="text-sm text-muted-foreground">
        {productCount} {productCount === 1 ? "produs" : "produse"}
      </p>

      <Separator />

      {/* Brand filter */}
      <div>
        <h4 className="text-sm font-medium mb-3">Brand</h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand.id} className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.brandIds.includes(brand.id)}
                onChange={() => toggleBrand(brand.id)}
                className="rounded border-input"
              />
              <span className="text-sm">{brand.name}</span>
              <Badge variant="secondary" className="ml-auto text-[10px] px-1.5">
                {brand.country}
              </Badge>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price range */}
      <div>
        <h4 className="text-sm font-medium mb-3">Preț (RON)</h4>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            placeholder="De la"
            value={filters.minPrice}
            onChange={(e) => onFilterChange({ ...filters, minPrice: e.target.value })}
            className="h-8 text-sm"
          />
          <span className="text-muted-foreground">—</span>
          <Input
            type="number"
            placeholder="Până la"
            value={filters.maxPrice}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: e.target.value })}
            className="h-8 text-sm"
          />
        </div>
      </div>

      <Separator />

      {/* In stock */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={filters.inStockOnly}
          onChange={(e) => onFilterChange({ ...filters, inStockOnly: e.target.checked })}
          className="rounded border-input"
        />
        <span className="text-sm">Doar produse în stoc</span>
      </label>
    </aside>
  );
}
