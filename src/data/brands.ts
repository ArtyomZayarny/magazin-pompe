import { Brand } from "@/types/brand";

export const brands: Brand[] = [
  {
    id: "pedrollo",
    slug: "pedrollo",
    name: "Pedrollo",
    country: "Italia",
    description:
      "Lider mondial în producția de electropompe, cu peste 2 milioane de pompe fabricate anual.",
    longDescription: `Pedrollo S.p.A., fondată în 1974 de Silvano Pedrollo în San Bonifacio, Verona, Italia, este unul dintre cei mai mari producători de pompe de apă din lume. Compania produce peste 2 milioane de pompe anual, exportate în peste 160 de țări.

Filozofia Pedrollo se bazează pe conceptul "Made in Italy" — toate produsele sunt proiectate, fabricate și testate în Italia, folosind cele mai moderne tehnologii și materiale de cea mai înaltă calitate.

Gama de produse include pompe submersibile, pompe de suprafață, hidrofoare, pompe de circulație, pompe de drenaj și multe altele. Fiecare pompă Pedrollo este rezultatul a peste 50 de ani de experiență în ingineria hidraulică.

ACQUA SERVICE este distribuitor autorizat Pedrollo în România, oferind gama completă de produse cu garanție și suport tehnic profesional.`,
    logo: "/images/brands/pedrollo-logo.png",
    heroImage: "/images/brands/pedrollo-hero.jpg",
    founded: "1974",
    certifications: ["ISO 9001", "ISO 14001", "CE", "WRAS", "NSF"],
    website: "https://www.pedrollo.com",
  },
  {
    id: "saer",
    slug: "saer",
    name: "SAER",
    country: "Italia",
    description:
      "Producător italian de electropompe cu peste 800 de modele, 100% fabricate în Italia.",
    longDescription: `SAER Elettropompe S.p.A., fondată în 1951 în Guastalla, Reggio Emilia, Italia, este un producător renumit de electropompe cu o tradiție de peste 70 de ani. Compania oferă peste 800 de modele diferite, toate fabricate 100% în Italia.

SAER se distinge prin capacitatea de a acoperi practic orice necesitate de pompare — de la uz casnic la aplicații industriale complexe. Gama include pompe submersibile, electropompe centrifuge, pompe multietajate și grupuri de pompare personalizate.

Fiecare produs SAER este supus unor teste riguroase de calitate și performanță, asigurând fiabilitate și durabilitate excepționale. Compania investește continuu în cercetare și dezvoltare pentru a oferi soluții eficiente energetic.

ACQUA SERVICE oferă gama completă SAER în România, cu consultanță tehnică pentru alegerea soluției optime de pompare.`,
    logo: "/images/brands/saer-logo.png",
    heroImage: "/images/brands/saer-hero.jpg",
    founded: "1951",
    certifications: ["ISO 9001", "ISO 14001", "CE", "ACS"],
    website: "https://www.saer.com",
  },
  {
    id: "caprari",
    slug: "caprari",
    name: "Caprari",
    country: "Italia",
    description:
      "Specialist italian în pompe submersibile de înaltă performanță pentru puțuri adânci.",
    longDescription: `Caprari S.p.A., fondată în 1945 în Modena, Italia, este unul dintre liderii mondiali în producția de pompe submersibile de înaltă performanță. Cu peste 75 de ani de experiență, Caprari oferă soluții avansate pentru gestionarea apei.

Compania este recunoscută pentru excelența sa în domeniul pompelor submersibile pentru puțuri adânci, oferind gama E4XP și alte serii de pompe cu eficiență energetică ridicată și construcție robustă din oțel inoxidabil.

Caprari investește semnificativ în cercetare și dezvoltare, având unul dintre cele mai avansate laboratoare de testare din industrie. Produsele sunt conforme cu cele mai stricte standarde internaționale de calitate și eficiență.

Ca distribuitor Caprari, ACQUA SERVICE oferă clienților din România acces la cele mai performante pompe submersibile italiene, cu suport tehnic complet.`,
    logo: "/images/brands/caprari-logo.png",
    heroImage: "/images/brands/caprari-hero.jpg",
    founded: "1945",
    certifications: ["ISO 9001", "ISO 14001", "CE", "WRAS"],
    website: "https://www.caprari.com",
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find((b) => b.id === id);
}
