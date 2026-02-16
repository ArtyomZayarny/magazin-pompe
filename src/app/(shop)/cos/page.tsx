"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/cart";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-4">Coșul este gol</h1>
        <p className="text-muted-foreground mb-8">
          Nu ai adăugat încă niciun produs în coș.
        </p>
        <Button asChild size="lg">
          <Link href="/produse">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continuă Cumpărăturile
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Coș de Cumpărături</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <Card key={item.product.id}>
              <CardContent className="p-4 flex gap-4">
                <div className="h-24 w-24 bg-muted rounded flex-shrink-0 relative overflow-hidden">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    className="object-contain p-2"
                    sizes="96px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <Link
                    href={`/produse/${item.product.slug}`}
                    className="font-medium hover:text-primary transition-colors line-clamp-2"
                  >
                    {item.product.name}
                  </Link>
                  <p className="text-sm text-muted-foreground mt-1">
                    SKU: {item.product.sku}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="font-semibold text-primary">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => removeItem(item.product.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="flex justify-between">
            <Button asChild variant="ghost">
              <Link href="/produse">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continuă Cumpărăturile
              </Link>
            </Button>
            <Button variant="ghost" className="text-destructive hover:text-destructive" onClick={clearCart}>
              <Trash2 className="h-4 w-4 mr-2" />
              Golește Coșul
            </Button>
          </div>
        </div>

        {/* Order summary */}
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="font-semibold text-lg mb-4">Sumar Comandă</h2>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Livrare</span>
                  <span className="text-brand-green">Se calculează</span>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-primary">{formatPrice(getTotalPrice())}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">TVA inclus</p>
              <Button asChild className="w-full mt-6" size="lg">
                <Link href="/comanda">
                  Finalizează Comanda
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <p className="text-xs text-center text-muted-foreground mt-3">
                Plata se face la livrare sau prin transfer bancar
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
