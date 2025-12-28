import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Professionele webdevelopment diensten inclusief bedrijfswebsites, maatwerk applicaties, e-commerce en doorlopende ondersteuning.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-linear-to-br from-muted via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-dots text-primary/10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 -z-10 h-125] w-125 bg-primary/5 rounded-full blur-3xl opacity-50"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Weboplossingen die <span className="text-primary">uw bedrijf versterken</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance">
            Van slimme bedrijfswebsites tot complexe maatwerkapplicaties.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Wij bouwen niet zomaar een site. 
            <br className="hidden sm:block" />
            Wij bouwen uw digitale toekomst, stap voor stap en binnen uw mogelijkheden.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl space-y-24">
          
          {/* Business Websites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Webdevelopment</Badge>
              <h2 className="text-3xl font-bold mb-4">Bedrijfswebsites</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Uw website is uw digitale visitekaartje. 
                <br />
                Wij bouwen professionele, snelle en SEO-geoptimaliseerde websites die u helpen opvallen en meer klanten aantrekken.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Responsief ontwerp voor alle apparaten</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>SEO-vriendelijke structuur</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Eenvoudig contentbeheer</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button>Vraag een offerte aan</Button>
              </Link>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden border bg-muted">
              <Image 
                src="/images/website.jpg" 
                alt="Professionele bedrijfswebsite voorbeeld" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Custom Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-last md:order-first relative h-80 rounded-xl overflow-hidden border bg-muted">
              <Image 
                src="/images/dashboard.jpg" 
                alt="Maatwerk dashboard applicatie voorbeeld" 
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4">Maatwerk Software</Badge>
              <h2 className="text-3xl font-bold mb-4">Maatwerk Webapplicaties</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Meer nodig dan alleen een website? 
                <br />
                Wij bouwen maatwerk webapplicaties, dashboards en interne tools om uw bedrijfsprocessen te stroomlijnen.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Gebruikersauthenticatie & beheer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Database integratie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Real-time data & dashboards</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button>Bespreek uw idee</Button>
              </Link>
            </div>
          </div>

          {/* E-commerce */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">E-commerce</Badge>
              <h2 className="text-3xl font-bold mb-4">Webshops & E-commerce</h2>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Voor webshops werken we met betrouwbare platformen zoals Shopify die zich al jarenlang bewezen hebben.
                <br />
                Zo bent u zeker van een veilige, snelle en onderhoudsvriendelijke winkel die met u meegroeit.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Veilig betalen & betrouwbare afhandeling</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Eenvoudig zelf producten beheren</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Schaalbaar voor de toekomst</span>
                </li>
              </ul>
              <p className="text-muted-foreground mb-8 italic">
                Heeft u specifieke noden die niet in een standaard webshop passen? Dan bouwen we een oplossing op maat.
              </p>
              <Link href="/contact">
                <Button>Start met verkopen</Button>
              </Link>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden border bg-muted">
              <Image 
                src="/images/ecommerce.jpg" 
                alt="E-commerce webshop voorbeeld" 
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Support */}
          <div className="bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
            <h2 className="text-3xl font-bold mb-4">Doorlopende Ondersteuning & Onderhoud</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
              Wij lanceren niet zomaar om daarna te vertrekken. 
              <br />
              Wij bieden doorlopende ondersteuningspakketten om uw website veilig, up-to-date en soepel draaiende te houden.
            </p>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm border-primary/20 hover:bg-background/80">Vraag naar support</Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
