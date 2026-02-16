import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Pagina nu a fost găsită</h2>
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Pagina pe care o căutați nu există sau a fost mutată.
        Verificați adresa URL sau navigați din meniul principal.
      </p>
      <div className="flex justify-center gap-3">
        <Button asChild>
          <Link href="/">Pagina Principală</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/produse">Vezi Produsele</Link>
        </Button>
      </div>
    </div>
  );
}
