import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Over Mij",
  description:
    "Webdynamiq is een webdevelopment bureau gericht op het helpen van kleine bedrijven om te groeien met professionele, betaalbare digitale oplossingen.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-linear-to-br from-muted via-background to-background">
        <div className="absolute inset-0 bg-dots text-primary/10 pointer-events-none"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Uw digitale partner voor{" "}
            <span className="text-primary">duurzame groei</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance">
            Ik ben een freelancer die gelooft in kwaliteit, eerlijkheid en
            flexibiliteit.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Geen snelle sales, maar langdurige samenwerkingen.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mijn Missie</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Bij Webdynamiq geloof ik dat professioneel webdevelopment
                  niet voorbehouden moet zijn aan grote bedrijven met enorme
                  budgetten.
                </p>
                <p>
                  Ik ben dit bureau gestart om de kloof te overbruggen tussen
                  doe-het-zelf websitebouwers en dure bureaus. Ik bied een
                  middenweg:{" "}
                  <strong>
                    premium kwaliteit, maatwerkoplossingen en persoonlijke
                    service
                  </strong>{" "}
                  voor een prijs die logisch is voor groeiende bedrijven.
                </p>
                <p>
                  Ik schrijf niet alleen code; ik los problemen op. Of u nu
                  meer lokale klanten wilt aantrekken, uw boekingsproces wilt
                  stroomlijnen of online producten wilt verkopen, ik bouw de
                  tools om u te helpen slagen.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden border bg-muted/30">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--primary),transparent)] opacity-10"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-muted-foreground font-medium relative z-10">
                  Werkplek Illustratie
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Waar ik voor sta</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mijn kernwaarden vormen de basis van elk project dat ik aanneem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Transparantie</h3>
                <p className="text-muted-foreground">
                  Geen verborgen kosten, geen technisch jargon om u te
                  verwarren. Ik communiceer open en eerlijk over prijzen,
                  tijdlijnen en mogelijkheden.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Kwaliteit</h3>
                <p className="text-muted-foreground">
                  Ik lever geen half werk. Ik bouw robuuste, veilige en
                  snelle websites die voldoen aan de hoogste standaarden in de
                  industrie.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-8">
                <h3 className="text-xl font-bold mb-3">Partnerschap</h3>
                <p className="text-muted-foreground">
                  Ik zie mezelf niet als leverancier, maar als partner. Uw
                  succes is mijn succes. Ik denk proactief mee over hoe uw
                  website uw bedrijf kan helpen groeien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto max-w-5xl">
          <div className="bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
            <h2 className="text-3xl font-bold mb-4">
              Klaar om samen te werken?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
              Laten we kijken of we een goede match zijn voor uw volgende
              project.
            </p>
            <Link href="/contact">
              <Button size="lg">Neem contact op</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
