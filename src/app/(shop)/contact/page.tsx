"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div>
      <section className="bg-gradient-to-br from-primary/5 via-background to-brand-green/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Suntem aici să te ajutăm. Contactează-ne pentru consultanță, oferte
            de preț sau suport tehnic.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Adresă</h3>
                  <p className="text-sm text-muted-foreground">
                    Str. Fabrica de Glucoză nr. 6-8<br />
                    Sector 2, București, România
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <a href="tel:+40214560890" className="text-sm text-primary hover:underline">
                    +40 21 456 08 90
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a href="mailto:office@acquaservice.ro" className="text-sm text-primary hover:underline">
                    office@acquaservice.ro
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-start gap-4">
                <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Program</h3>
                  <p className="text-sm text-muted-foreground">
                    Luni - Vineri: 9:00 - 17:00<br />
                    Sâmbătă - Duminică: Închis
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Date Firmă</h3>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>SC ACQUA SERVICE SA</p>
                  <p>CUI: RO9934570</p>
                  <p>Reg. Com.: J40/7890/1997</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-brand-green mx-auto mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Mesaj Trimis!</h2>
                    <p className="text-muted-foreground mb-6">
                      Mulțumim pentru mesaj. Vă vom contacta în cel mai scurt timp posibil.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Trimite Alt Mesaj
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold mb-6">Trimite-ne un Mesaj</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">
                            Nume <span className="text-destructive">*</span>
                          </label>
                          <Input required name="name" placeholder="Numele dvs." />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">
                            Telefon
                          </label>
                          <Input name="phone" type="tel" placeholder="+40 7XX XXX XXX" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">
                          Email <span className="text-destructive">*</span>
                        </label>
                        <Input required name="email" type="email" placeholder="email@exemplu.ro" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">
                          Subiect
                        </label>
                        <Input name="subject" placeholder="Ex: Solicit ofertă pentru hidrofor" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">
                          Mesaj <span className="text-destructive">*</span>
                        </label>
                        <textarea
                          required
                          name="message"
                          rows={5}
                          placeholder="Descrieți cererea dvs..."
                          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        />
                      </div>
                      <Button type="submit" size="lg" disabled={loading}>
                        <Send className="h-4 w-4 mr-2" />
                        {loading ? "Se trimite..." : "Trimite Mesajul"}
                      </Button>
                    </form>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
