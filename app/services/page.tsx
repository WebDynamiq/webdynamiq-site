import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Diensten",
  description: "Professionele webdevelopment diensten inclusief bedrijfswebsites, maatwerk applicaties, e-commerce en doorlopende ondersteuning.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Onze Diensten</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uitgebreide weboplossingen op maat van uw bedrijf. Van eenvoudige sites tot complexe applicaties.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl space-y-24">
          
          {/* Business Websites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Webdevelopment</Badge>
              <h2 className="text-3xl font-bold mb-4">Bedrijfswebsites</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Uw website is uw digitale visitekaartje. Wij bouwen professionele, snelle en SEO-geoptimaliseerde websites die u helpen opvallen en meer klanten aantrekken.
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
            <div className="bg-muted rounded-xl h-80 flex items-center justify-center border">
              <span className="text-muted-foreground">Website Illustratie</span>
            </div>
          </div>

          {/* Custom Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-last md:order-first bg-muted rounded-xl h-80 flex items-center justify-center border">
              <span className="text-muted-foreground">App Illustratie</span>
            </div>
            <div>
              <Badge className="mb-4">Maatwerk Software</Badge>
              <h2 className="text-3xl font-bold mb-4">Maatwerk Webapplicaties</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Meer nodig dan alleen een website? Wij bouwen maatwerk webapplicaties, dashboards en interne tools om uw bedrijfsprocessen te stroomlijnen.
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
              <p className="text-muted-foreground mb-6 text-lg">
                Begin online te verkopen met een robuust e-commerce platform. Wij bouwen schaalbare webshops die een naadloze winkelervaring bieden voor uw klanten.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Veilige betalingsintegratie</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Voorraadbeheer</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Bestellingstracking & meldingen</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button>Start met verkopen</Button>
              </Link>
            </div>
            <div className="bg-muted rounded-xl h-80 flex items-center justify-center border">
              <span className="text-muted-foreground">E-commerce Illustratie</span>
            </div>
          </div>

          {/* Support */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Doorlopende Ondersteuning & Onderhoud</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Wij lanceren niet zomaar om daarna te vertrekken. Wij bieden doorlopende ondersteuningspakketten om uw website veilig, up-to-date en soepel draaiende te houden.
            </p>
            <Link href="/contact">
              <Button variant="outline">Vraag naar support</Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
