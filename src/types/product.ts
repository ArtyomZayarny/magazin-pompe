export interface ProductSpec {
  label: string;
  value: string;
  unit?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  oldPrice?: number;
  currency: string;
  images: string[];
  categoryId: string;
  brandId: string;
  specs: ProductSpec[];
  inStock: boolean;
  sku: string;
  relatedProductIds: string[];
  createdAt: string;
}
