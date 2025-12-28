import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Over Ons",
  description: "Webdynamiq is een webdevelopment bureau gericht op het helpen van kleine bedrijven om te groeien met professionele, betaalbare digitale oplossingen.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Uw digitale partner voor duurzame groei</h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4">
            Wij zijn een bureau dat gelooft in kwaliteit, eerlijkheid en flexibiliteit.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Geen snelle sales, maar langdurige samenwerkingen.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Onze Missie</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Bij Webdynamiq geloven we dat professioneel webdevelopment niet voorbehouden moet zijn aan grote bedrijven met enorme budgetten.
                </p>
                <p>
                  We zijn dit bureau gestart om de kloof te overbruggen tussen doe-het-zelf websitebouwers en dure bureaus. We bieden een middenweg: <strong>premium kwaliteit, maatwerkoplossingen en persoonlijke service</strong>—voor een prijs die logisch is voor groeiende bedrijven.
                </p>
                <p>
                  We schrijven niet alleen code; we lossen problemen op. Of u nu meer lokale klanten wilt aantrekken, uw boekingsproces wilt stroomlijnen of online producten wilt verkopen, wij bouwen de tools om u te helpen slagen.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center border">
              <span className="text-muted-foreground">Team / Kantoor Illustratie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Waar wij voor staan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Onze kernwaarden vormen de basis van elk project dat we aannemen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Transparantie</h3>
                <p className="text-muted-foreground">
                  Geen verborgen kosten, geen technisch jargon om u te verwarren. We communiceren open en eerlijk over prijzen, tijdlijnen en mogelijkheden.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Kwaliteit</h3>
                <p className="text-muted-foreground">
                  We leveren geen half werk. We bouwen robuuste, veilige en snelle websites die voldoen aan de hoogste standaarden in de industrie.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Partnerschap</h3>
                <p className="text-muted-foreground">
                  Wij zien onszelf niet als leverancier, maar als partner. Uw succes is ons succes. We denken proactief mee over hoe uw website uw bedrijf kan helpen groeien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om samen te werken?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Laten we kijken of we een goede match zijn voor uw volgende project.
          </p>
          <Link href="/contact">
            <Button size="lg">Neem contact op</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
