"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/cart";
import { formatPrice } from "@/data/products";

export default function CheckoutPage() {
  const { items, getTotalPrice, clearCart } = useCartStore();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-16 text-center max-w-lg">
        <CheckCircle2 className="h-20 w-20 text-brand-green mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Comandă Plasată!</h1>
        <p className="text-muted-foreground mb-2">
          Mulțumim pentru comanda dvs. Veți primi un email de confirmare în curând.
        </p>
        <p className="text-muted-foreground mb-8">
          Echipa noastră vă va contacta pentru confirmarea detaliilor și stabilirea livrării.
        </p>
        <div className="flex justify-center gap-3">
          <Button asChild>
            <Link href="/produse">Continuă Cumpărăturile</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/">Acasă</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="h-20 w-20 text-muted-foreground/20 mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-4">Coșul este gol</h1>
        <p className="text-muted-foreground mb-8">
          Adaugă produse în coș înainte de a finaliza comanda.
        </p>
        <Button asChild size="lg">
          <Link href="/produse">Vezi Produsele</Link>
        </Button>
      </div>
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    clearCart();
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Button asChild variant="ghost" size="sm" className="mb-6">
        <Link href="/cos">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Înapoi la Coș
        </Link>
      </Button>

      <h1 className="text-2xl md:text-3xl font-bold mb-8">Finalizare Comandă</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Date de Contact</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Nume Complet <span className="text-destructive">*</span>
                    </label>
                    <Input required name="name" placeholder="Ion Popescu" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Telefon <span className="text-destructive">*</span>
                    </label>
                    <Input required name="phone" type="tel" placeholder="+40 7XX XXX XXX" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm font-medium mb-1.5 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <Input required name="email" type="email" placeholder="email@exemplu.ro" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Delivery */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Adresă de Livrare</h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">
                      Adresă <span className="text-destructive">*</span>
                    </label>
                    <Input required name="address" placeholder="Strada, număr, bloc, scara, apartament" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Oraș <span className="text-destructive">*</span>
                      </label>
                      <Input required name="city" placeholder="București" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Județ <span className="text-destructive">*</span>
                      </label>
                      <Input required name="county" placeholder="București" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">
                        Cod Poștal
                      </label>
                      <Input name="postalCode" placeholder="010101" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Company (optional) */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-1">Date Firmă (opțional)</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Completează dacă dorești factură pe firmă
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Denumire Firmă</label>
                    <Input name="companyName" placeholder="SC Exemplu SRL" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">CUI</label>
                    <Input name="cui" placeholder="RO12345678" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Notes */}
            <Card>
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Observații</h2>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Instrucțiuni speciale pentru livrare sau alte observații..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-semibold text-lg mb-4">Comanda Ta</h2>
                <div className="space-y-3 mb-4">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between text-sm">
                      <span className="text-muted-foreground line-clamp-1 flex-1 mr-2">
                        {item.product.name} x{item.quantity}
                      </span>
                      <span className="font-medium flex-shrink-0">
                        {formatPrice(item.product.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>
                <Separator className="my-4" />
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Livrare</span>
                    <span className="text-brand-green">Se va calcula</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(getTotalPrice())}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1 mb-6">TVA inclus</p>

                <Button type="submit" className="w-full" size="lg" disabled={loading}>
                  {loading ? "Se procesează..." : "Plasează Comanda"}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  Plata se face ramburs la livrare sau prin transfer bancar.
                  Vă vom contacta pentru confirmare.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}
