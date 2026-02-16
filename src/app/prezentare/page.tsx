"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ShieldAlert,
  SearchX,
  ImageOff,
  FileX,
  BarChart3,
  Eye,
  XCircle,
  CheckCircle2,
  Search,
  SlidersHorizontal,
  BookOpen,
  ShoppingCart,
  Smartphone,
  Award,
  TrendingUp,
  Globe,
  DollarSign,
  Wrench,
  AlertTriangle,
  Users,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { products } from "@/data/products";
import { brands } from "@/data/brands";
import { categories } from "@/data/categories";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function ItalianFlag({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? "w-1.5 h-3" : size === "lg" ? "w-3 h-6" : "w-2 h-4";
  return (
    <div className="flex gap-0.5">
      <div className={`${dims} bg-italian-green rounded-sm`} />
      <div className={`${dims} bg-white border rounded-sm`} />
      <div className={`${dims} bg-italian-red rounded-sm`} />
    </div>
  );
}

const productCount = products.length;
const categoryCount = categories.length;
const brandCount = brands.length;

const pedrolloCount = products.filter((p) => p.brandId === "pedrollo").length;
const saerCount = products.filter((p) => p.brandId === "saer").length;
const caprariCount = products.filter((p) => p.brandId === "caprari").length;

const problemCards = [
  {
    icon: ShieldAlert,
    title: "Security Vulnerabilities",
    description:
      "OpenCart 2.0 has documented CVEs (SQL injection, XSS). The admin panel is publicly accessible. No upgrade path exists — OpenCart 4 broke backward compatibility.",
    badge: "Critical",
  },
  {
    icon: Eye,
    title: "Invisible to Google",
    description:
      "No robots.txt (returns 404), broken sitemap.xml, zero JSON-LD structured data, no Open Graph tags. Google literally cannot find your products.",
    badge: "Zero SEO",
  },
  {
    icon: SearchX,
    title: "No Search Functionality",
    description:
      "Over 100 products with no way for customers to search or filter. They must browse through pages hoping to find what they need.",
    badge: "Lost Sales",
  },
  {
    icon: ImageOff,
    title: "Single Product Photos",
    description:
      "One photo per product, no gallery, no zoom. Customers buying expensive equipment need to see details before committing.",
    badge: "Poor UX",
  },
  {
    icon: FileX,
    title: "No Content Marketing",
    description:
      "No blog, no buying guides, no brand pages, no FAQ. Every competitor is capturing organic traffic you're missing.",
    badge: "No Traffic",
  },
  {
    icon: BarChart3,
    title: "Dead Analytics",
    description:
      "Universal Analytics was deprecated by Google in July 2024. No GA4 migration. You're running blind — no data on visitors, conversions, or behavior.",
    badge: "Blind",
  },
];

const comparisonRows = [
  { feature: "Technology", old: "OpenCart 2.0 (2014)", now: "Next.js 15 + React 19" },
  { feature: "Search", old: "None", now: "Instant autocomplete with images" },
  { feature: "Filters", old: "None", now: "Brand, price range, stock status" },
  { feature: "Product Photos", old: "1 per product", now: "Real photos + gallery-ready" },
  { feature: "Mobile", old: "Partially responsive", now: "Fully responsive, mobile-first" },
  { feature: "Blog", old: "None", now: "6 articles live" },
  { feature: "Brand Pages", old: "None", now: "3 dedicated Italian brand pages" },
  { feature: "SEO", old: "No robots.txt / sitemap", now: "JSON-LD, OG tags, sitemap.xml" },
  { feature: "Security", old: "Known CVEs, exposed admin", now: "Modern stack, no admin panel" },
  { feature: "Categories", old: "Disorganized", now: `${categoryCount} structured categories` },
];

const featureCards = [
  {
    icon: Search,
    title: "Instant Search",
    description:
      "Type and see results immediately — product images, prices, and availability shown as the customer types. No page reload needed.",
  },
  {
    icon: SlidersHorizontal,
    title: "Smart Filters",
    description:
      "Filter by brand (Pedrollo, SAER, Caprari), price range, and stock status. Dynamic product counts update as filters change.",
  },
  {
    icon: Award,
    title: "Brand Pages",
    description:
      "Dedicated pages for each Italian partner showcasing heritage, certifications, and full product range. Pedrollo since 1974, SAER since 1951, Caprari since 1945.",
  },
  {
    icon: BookOpen,
    title: "Blog & Guides",
    description:
      "6 launch articles covering pump selection, maintenance, brand stories, and irrigation. Each article drives organic Google traffic to your store.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Cart & Checkout",
    description:
      "Full e-commerce flow with persistent cart, quantity management, and checkout. Customers can browse, compare, and purchase seamlessly.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "70.6% of rural Romanians shop online. The new site is built mobile-first — perfect experience on any phone, tablet, or desktop.",
  },
];

const competitorRows = [
  {
    name: "eMAG",
    strength: "7,455+ pumps listed",
    italianFocus: "No",
    advantage: "Specialized expertise, exclusive brands",
  },
  {
    name: "MagazinPompe.ro",
    strength: "Direct import, modern site",
    italianFocus: "Mixed brands",
    advantage: "Exclusive Italian partnerships",
  },
  {
    name: "e-Industriale.ro",
    strength: "Free consultation",
    italianFocus: "Some Italian",
    advantage: "28-year Italian manufacturer relationship",
  },
  {
    name: "Leroy Merlin",
    strength: "Brand recognition",
    italianFocus: "No focus",
    advantage: "Premium positioning, deep expertise",
  },
];

const builtFeatures = [
  "Product catalog with real photos and pricing",
  "Instant search with autocomplete",
  "Advanced filtering (brand, price, stock)",
  `${categoryCount} organized product categories`,
  "3 Italian brand showcase pages",
  "6 blog articles for SEO",
  "Shopping cart with persistent storage",
  "Contact page with form validation",
  "About page with company history",
  "Fully responsive mobile design",
  "SEO: sitemap.xml, robots.txt, JSON-LD ready",
  "Deployed and live on Vercel CDN",
];

export default function PrezentarePage() {
  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-brand-green text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <AnimatedSection>
            <Badge className="mb-6 bg-white/15 text-white border-white/25 backdrop-blur-sm">
              <Calendar className="mr-1.5 h-3 w-3" />
              Private Presentation — February 2026
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 max-w-3xl">
              Your New Digital Storefront
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl leading-relaxed">
              A modern e-commerce platform built for ACQUA SERVICE — showcasing your exclusive Italian pump
              partnerships with the quality your brands deserve.
            </p>

            <div className="flex items-center gap-3 mb-10">
              <ItalianFlag size="lg" />
              <span className="text-sm opacity-75">Made in Italy — Presented with Pride</span>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="text-base px-4 py-2 bg-white/20 border-white/30 text-white">
                {productCount} Products Ready
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2 bg-white/20 border-white/30 text-white">
                {categoryCount} Categories
              </Badge>
              <Badge variant="secondary" className="text-base px-4 py-2 bg-white/20 border-white/30 text-white">
                {brandCount} Italian Brands
              </Badge>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="destructive" className="mb-4">
                Current Situation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                6 Critical Problems with Your Current Site
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your OpenCart 2.0 platform, installed around 2014, has fundamental issues that cannot be
                patched — only replaced.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemCards.map((card, i) => (
              <AnimatedSection key={i}>
                <Card className="h-full border-destructive/20 bg-destructive/[0.03]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <card.icon className="h-8 w-8 text-destructive" />
                      <Badge variant="destructive" className="text-xs">
                        {card.badge}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Before & After */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Before & After</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A direct comparison of your current site versus the new platform.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold w-1/3">Feature</th>
                      <th className="text-left p-4 font-semibold text-destructive w-1/3">
                        <span className="flex items-center gap-2">
                          <XCircle className="h-4 w-4" />
                          Old Site
                        </span>
                      </th>
                      <th className="text-left p-4 font-semibold text-brand-green w-1/3">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4" />
                          New Site
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, i) => (
                      <tr key={i} className={`border-b last:border-0 ${i % 2 === 0 ? "bg-background" : ""}`}>
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-muted-foreground">
                          <span className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-destructive shrink-0" />
                            {row.old}
                          </span>
                        </td>
                        <td className="p-4">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-brand-green shrink-0" />
                            {row.now}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. What Your Customers See */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-green/10 text-brand-green border-brand-green/20">
                Customer Experience
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Your Customers See</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every feature below is live and working right now on the new site.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featureCards.map((card, i) => (
              <AnimatedSection key={i}>
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <card.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Italian Heritage */}
      <section className="bg-gradient-to-b from-muted/40 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-4">
              <div className="flex justify-center mb-4">
                <div className="flex gap-1">
                  <div className="w-16 h-1.5 bg-italian-green rounded-full" />
                  <div className="w-16 h-1.5 bg-white border rounded-full" />
                  <div className="w-16 h-1.5 bg-italian-red rounded-full" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Italian Heritage, Showcased</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Your exclusive partnerships with Italy's finest pump manufacturers — now presented with the
                prestige they deserve.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {brands.map((brand) => {
              const count =
                brand.id === "pedrollo" ? pedrolloCount : brand.id === "saer" ? saerCount : caprariCount;
              return (
                <AnimatedSection key={brand.id}>
                  <Card className="h-full hover:shadow-lg transition-all border-primary/10">
                    <CardContent className="p-6 text-center">
                      <div className="flex justify-center mb-3">
                        <ItalianFlag />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{brand.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Founded {brand.founded} &middot; {brand.country}
                      </p>
                      <Separator className="my-4" />
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            Certifications
                          </p>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {brand.certifications.map((cert) => (
                              <Badge key={cert} variant="outline" className="text-xs">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                            Products in Catalog
                          </p>
                          <p className="text-2xl font-bold text-primary">{count}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection>
            <div className="mt-12 text-center">
              <blockquote className="text-lg md:text-xl italic text-muted-foreground max-w-2xl mx-auto">
                &ldquo;ACQUA SERVICE: connecting Italian excellence to Romanian customers since 1997.&rdquo;
              </blockquote>
              <p className="mt-4 text-sm font-medium text-primary">
                Your core differentiator: exclusive Italian partnerships that no marketplace can replicate.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 6. The Competition */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Competitive Landscape</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Your competitors have modern platforms. Here's why you still win — with the right tools.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b bg-muted/50">
                      <th className="text-left p-4 font-semibold">Competitor</th>
                      <th className="text-left p-4 font-semibold">Their Strength</th>
                      <th className="text-left p-4 font-semibold">Italian Focus</th>
                      <th className="text-left p-4 font-semibold text-brand-green">Your Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorRows.map((row, i) => (
                      <tr key={i} className={`border-b last:border-0 ${i % 2 === 0 ? "bg-background" : ""}`}>
                        <td className="p-4 font-medium">{row.name}</td>
                        <td className="p-4 text-muted-foreground">{row.strength}</td>
                        <td className="p-4 text-muted-foreground">{row.italianFocus}</td>
                        <td className="p-4 font-medium text-brand-green">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </AnimatedSection>
          <AnimatedSection>
            <div className="mt-8 text-center">
              <Card className="inline-block bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-lg font-medium max-w-xl">
                    &ldquo;You don't compete on quantity. You compete on <span className="text-primary">quality</span>,{" "}
                    <span className="text-primary">expertise</span>, and{" "}
                    <span className="text-primary">exclusive Italian partnerships</span>.&rdquo;
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 7. Business Impact */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Business Opportunity</h2>
              <p className="opacity-80 max-w-xl mx-auto">
                The Romanian e-commerce market and global pump industry are growing. The question is whether
                you capture that growth — or your competitors do.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: TrendingUp,
                value: 8,
                suffix: "%/year",
                label: "Romanian E-Commerce Growth",
                detail: "Online retail expanding steadily year over year",
              },
              {
                icon: Globe,
                value: 86,
                suffix: "B",
                label: "Global Pump Market by 2030",
                detail: "Up from $68B — growing demand worldwide",
              },
              {
                icon: Smartphone,
                value: 70,
                suffix: "%",
                label: "Rural Romanians Online",
                detail: "Your target audience is already shopping online",
              },
              {
                icon: DollarSign,
                value: 2,
                suffix: "x",
                label: "Aftermarket Profitability",
                detail: "Parts, service & accessories vs. new equipment",
              },
            ].map((stat, i) => (
              <AnimatedSection key={i}>
                <Card className="bg-white/10 border-white/20 text-primary-foreground h-full">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-3 opacity-80" />
                    <p className="text-3xl md:text-4xl font-bold mb-1">
                      {stat.suffix === "B" && "$"}
                      <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="font-semibold mb-1">{stat.label}</p>
                    <p className="text-sm opacity-70">{stat.detail}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Risk of Inaction */}
      <section className="bg-destructive/[0.04] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge variant="destructive" className="mb-4">
                Risk Assessment
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Risk of Doing Nothing</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Every month on the old platform costs you customers, visibility, and security.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: ShieldAlert,
                title: "Security Breach",
                description:
                  "OpenCart 2.0 has documented SQL injection vulnerabilities. A breach means customer data exposure, legal liability, and loss of trust. Romania's GDPR equivalent (Legea 190/2018) carries significant penalties.",
              },
              {
                icon: TrendingUp,
                title: "Lost Organic Traffic",
                description:
                  "Without robots.txt, sitemap, or structured data, Google cannot index your products. Every day, potential customers search for 'pompe submersibile' and find your competitors instead.",
              },
              {
                icon: Users,
                title: "Customer Migration",
                description:
                  "When customers can't search, filter, or find products, they leave. eMAG offers 7,455+ pump listings with search and reviews. Your customers are already going there.",
              },
            ].map((risk, i) => (
              <AnimatedSection key={i}>
                <Card className="h-full border-destructive/20">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                      <risk.icon className="h-6 w-6 text-destructive" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{risk.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{risk.description}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. What's Already Built */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-brand-green/10 text-brand-green border-brand-green/20">
                Ready Now
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Already Built</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                This is not a proposal or a mockup.{" "}
                <span className="font-semibold text-foreground">This is a working product.</span>
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="space-y-3">
                {builtFeatures.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <Card className="bg-muted/50 h-full">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                    <Wrench className="h-5 w-5 text-primary" />
                    Technology Stack
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Next.js 15", desc: "React framework by Vercel — used by Netflix, Nike, Notion" },
                      { name: "Tailwind CSS 4", desc: "Utility-first styling — consistent, responsive design" },
                      { name: "TypeScript", desc: "Type-safe code — fewer bugs, easier maintenance" },
                      { name: "shadcn/ui", desc: "Beautiful, accessible component library" },
                      { name: "Vercel", desc: "Global CDN — sub-second page loads worldwide" },
                    ].map((tech, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <Badge variant="outline" className="shrink-0 mt-0.5 font-mono text-xs">
                          {tech.name}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{tech.desc}</span>
                      </div>
                    ))}
                  </div>
                  <Separator className="my-4" />
                  <p className="text-sm text-muted-foreground">
                    The same technology stack used by Fortune 500 companies — now powering your pump store.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-brand-green text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <ItalianFlag size="lg" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to See It in Action?</h2>
            <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
              Click below to explore the live site — browse products, search the catalog, read the blog. Everything works.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-primary font-semibold">
                <Link href="/">
                  Explore the New Site
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Link href="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
