import { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "pompe-submersibile",
    slug: "pompe-submersibile",
    name: "Pompe Submersibile",
    description: "Pompe submersibile pentru puțuri adânci și fântâni. Modele de la Pedrollo, SAER și Caprari pentru orice adâncime.",
    image: "/images/categories/pompe-submersibile.jpg",
    order: 1,
  },
  {
    id: "hidrofoare",
    slug: "hidrofoare",
    name: "Hidrofoare",
    description: "Sisteme complete de hidrofor pentru alimentarea cu apă a locuinței. Presiune constantă și funcționare automată.",
    image: "/images/categories/hidrofoare.jpg",
    order: 2,
  },
  {
    id: "pompe-suprafata",
    slug: "pompe-suprafata",
    name: "Pompe de Suprafață",
    description: "Pompe centrifuge și autoamorsante de suprafață pentru diverse aplicații casnice și industriale.",
    image: "/images/categories/pompe-suprafata.jpg",
    order: 3,
  },
  {
    id: "pompe-circulatie",
    slug: "pompe-circulatie",
    name: "Pompe de Circulație",
    description: "Pompe de circulație pentru sisteme de încălzire centrală și apă caldă menajeră.",
    image: "/images/categories/pompe-circulatie.webp",
    order: 4,
  },
  {
    id: "electropompe-centrifuge",
    slug: "electropompe-centrifuge",
    name: "Electropompe Centrifuge",
    description: "Electropompe centrifuge multi-etajate pentru presiune ridicată și aplicații industriale.",
    image: "/images/categories/electropompe-centrifuge.jpg",
    order: 5,
  },
  {
    id: "pompe-drenaj",
    slug: "pompe-drenaj",
    name: "Pompe pentru Drenaj",
    description: "Pompe de drenaj și canalizare pentru evacuarea apelor uzate și pluviale.",
    image: "/images/categories/pompe-drenaj.jpg",
    order: 6,
  },
  {
    id: "pompe-irigatii",
    slug: "pompe-irigatii",
    name: "Pompe pentru Irigații",
    description: "Pompe specializate pentru sisteme de irigații agricole și peisagistice.",
    image: "/images/categories/pompe-irigatii.jpg",
    order: 7,
  },
  {
    id: "motopompe",
    slug: "motopompe",
    name: "Motopompe",
    description: "Motopompe cu motor termic pentru locații fără acces la rețeaua electrică.",
    image: "/images/categories/motopompe.webp",
    order: 8,
  },
  {
    id: "grupuri-pompare",
    slug: "grupuri-pompare",
    name: "Grupuri de Pompare",
    description: "Grupuri complete de pompare și stații de ridicare a presiunii pentru clădiri și instalații.",
    image: "/images/categories/grupuri-pompare.webp",
    order: 9,
  },
  {
    id: "automatizari",
    slug: "automatizari",
    name: "Automatizări",
    description: "Sisteme de automatizare, protecție și control pentru pompe: presostate, variatore de frecvență.",
    image: "/images/categories/automatizari.png",
    order: 10,
  },
  {
    id: "accesorii",
    slug: "accesorii",
    name: "Accesorii",
    description: "Accesorii pentru pompe: racorduri, clapete de sens, manometre, cabluri submersibile.",
    image: "/images/categories/accesorii.png",
    order: 11,
  },
  {
    id: "vas-expansiune",
    slug: "vas-expansiune",
    name: "Vase de Expansiune",
    description: "Vase de expansiune cu membrană pentru sisteme de hidrofor și încălzire.",
    image: "/images/categories/vas-expansiune.jpg",
    order: 12,
  },
  {
    id: "filtre-apa",
    slug: "filtre-apa",
    name: "Filtre de Apă",
    description: "Filtre de apă mecanice și de sedimente pentru protecția echipamentelor de pompare.",
    image: "/images/categories/filtre-apa.jpg",
    order: 13,
  },
  {
    id: "fitinguri",
    slug: "fitinguri",
    name: "Fitinguri și Racorduri",
    description: "Fitinguri, racorduri și piese de legătură pentru instalații de pompare.",
    image: "/images/categories/fitinguri.jpg",
    order: 14,
  },
  {
    id: "panouri-solare",
    slug: "panouri-solare",
    name: "Panouri Solare",
    description: "Panouri solare termice pentru încălzirea apei menajere. Soluții ecologice și economice.",
    image: "/images/categories/panouri-solare.jpg",
    order: 15,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((c) => c.id === id);
}
