import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Magazin de Pompe | ACQUA SERVICE - Distribuitor Pompe Italia",
    template: "%s | ACQUA SERVICE",
  },
  description:
    "Magazin online de pompe submersibile, hidrofoare și echipamente hidraulice. Distribuitor autorizat Pedrollo, SAER, Caprari. Calitate italiană din 1997.",
  keywords: [
    "pompe submersibile",
    "hidrofoare",
    "pompe apa",
    "Pedrollo",
    "SAER",
    "Caprari",
    "pompe Italia",
    "acqua service",
    "magazin pompe",
  ],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://magazindepompe.ro",
    siteName: "ACQUA SERVICE - Magazin de Pompe",
    title: "Magazin de Pompe | ACQUA SERVICE - Distribuitor Pompe Italia",
    description:
      "Pompe submersibile, hidrofoare și echipamente hidraulice de la producători italieni. Distribuitor autorizat Pedrollo, SAER, Caprari din 1997.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://magazindepompe.ro",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
      </body>
    </html>
  );
}
