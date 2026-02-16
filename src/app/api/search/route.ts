import { NextRequest, NextResponse } from "next/server";
import { searchProducts } from "@/data/products";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q") || "";
  const limit = parseInt(request.nextUrl.searchParams.get("limit") || "10", 10);

  if (!query || query.length < 2) {
    return NextResponse.json({ results: [], total: 0 });
  }

  const results = searchProducts(query);

  return NextResponse.json({
    results: results.slice(0, limit).map((p) => ({
      id: p.id,
      slug: p.slug,
      name: p.name,
      shortDescription: p.shortDescription,
      price: p.price,
      brandId: p.brandId,
      inStock: p.inStock,
    })),
    total: results.length,
  });
}
