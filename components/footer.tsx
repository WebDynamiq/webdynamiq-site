import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/40">
      <div className="container px-4 md:px-8 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Webdynamiq</h3>
            
            <address className="not-italic text-sm text-muted-foreground flex flex-col gap-1">
              <span>Zelfstandige in bijberoep</span>
              <span>Ondernemingsnummer: 1011.383.168</span>
              <span>Oud-Turnhout, België</span>
              <a href="mailto:info@webdynamiq.com" className="hover:text-foreground transition-colors underline">info@webdynamiq.com</a>
            </address>  
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Bedrijf</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">Over mij</Link></li>
              <li><Link href="/process" className="hover:text-foreground">Mijn werkwijze</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-foreground">Webdevelopment</Link></li>
              <li><Link href="/services" className="hover:text-foreground">E-commerce</Link></li>
              <li><Link href="/maintenance" className="hover:text-foreground">Onderhoud & Support</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground">Tarieven</Link></li>
              <li><Link href="/pricing/how-it-works" className="hover:text-foreground">Hoe prijzen werken</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Juridisch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground">Privacybeleid</Link></li>
              <li><Link href="/terms" className="hover:text-foreground">Algemene Voorwaarden</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Webdynamiq. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
}
