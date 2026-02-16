"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type SortOption = "relevance" | "price-asc" | "price-desc" | "newest";

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <Select value={value} onValueChange={(v) => onChange(v as SortOption)}>
      <SelectTrigger className="w-[180px] h-9">
        <SelectValue placeholder="Sortează" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="relevance">Relevanță</SelectItem>
        <SelectItem value="price-asc">Preț crescător</SelectItem>
        <SelectItem value="price-desc">Preț descrescător</SelectItem>
        <SelectItem value="newest">Cele mai noi</SelectItem>
      </SelectContent>
    </Select>
  );
}
