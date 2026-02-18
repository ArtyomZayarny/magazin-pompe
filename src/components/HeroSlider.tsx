"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const slides = [
  {
    image: "/images/slides/slide-industrial.jpg",
    title: "Performanță Industrială",
    subtitle: "Soluții profesionale de pompare pentru industrie și agricultură",
    badge: "Echipamente Premium",
  },
  {
    image: "/images/slides/slide-showroom.jpg",
    title: "Showroom ACQUA SERVICE",
    subtitle: "Cel mai mare stoc de pompe italiene din România — disponibile imediat",
    badge: "Disponibil în Stoc",
  },
  {
    image: "/images/slides/slide-pipes.jpg",
    title: "Infrastructură Hidraulică",
    subtitle: "Componente și accesorii pentru instalații complete de pompare",
    badge: "Soluții Complete",
  },
  {
    image: "/images/slides/slide-irrigation.jpg",
    title: "Irigații și Agricultură",
    subtitle: "Pompe de înaltă performanță pentru sisteme de irigații moderne",
    badge: "Made in Italy",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative w-full overflow-hidden bg-black">
      {/* Slides */}
      <div className="relative h-[280px] sm:h-[360px] md:h-[440px] lg:h-[520px]">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-all duration-600 ease-in-out ${
              i === current
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority={i === 0}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
        ))}

        {/* Content overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === current
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4 absolute pointer-events-none"
                  }`}
                >
                  {i === current && (
                    <>
                      <Badge className="mb-4 bg-white/15 text-white border-white/25 backdrop-blur-sm text-sm">
                        {slide.badge}
                      </Badge>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-xl drop-shadow-md">
                        {slide.subtitle}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Button asChild size="lg" className="shadow-lg">
                          <Link href="/produse">
                            Vezi Catalogul
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          className="bg-white text-primary font-semibold hover:bg-white/90 shadow-lg"
                        >
                          <Link href="/contact">
                            <Phone className="mr-2 h-4 w-4" />
                            Solicită Consultanță
                          </Link>
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          aria-label="Slide anterioară"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={next}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/25 transition-all"
          aria-label="Slide următoare"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
