import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Over Ons",
  description: "Webdynamiq is een webdevelopment bureau gericht op het helpen van kleine bedrijven om te groeien met professionele, betaalbare digitale oplossingen.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Over Webdynamiq</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Wij zijn een digitale partner voor bedrijven die kwaliteit, eerlijkheid en flexibiliteit waarderen.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Onze Filosofie</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Bij Webdynamiq geloven we dat professioneel webdevelopment niet voorbehouden moet zijn aan grote bedrijven met enorme budgetten.
                </p>
                <p>
                  We zijn dit bureau gestart om de kloof te overbruggen tussen doe-het-zelf websitebouwers en dure bureaus. We bieden een middenweg: premium kwaliteit, maatwerkoplossingen en persoonlijke service—voor een prijs die logisch is voor groeiende bedrijven.
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

      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-12">Onze Kernwaarden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Transparantie</h3>
              <p className="text-muted-foreground">
                Geen verborgen kosten, geen technisch jargon bedoeld om te verwarren. We leggen alles uit in begrijpelijke taal.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Flexibiliteit</h3>
              <p className="text-muted-foreground">
                We passen ons aan uw behoeften en budget aan. We geloven in het vinden van oplossingen, niet het creëren van barrières.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Kwaliteit</h3>
              <p className="text-muted-foreground">
                We zijn trots op ons werk. Elke regel code en elke pixel is met zorg en aandacht voor detail gemaakt.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Laten we samenwerken</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Of u nu een duidelijke visie heeft of slechts een ruw idee, wij zijn er om u te helpen de volgende stap te zetten.
          </p>
          <Link href="/contact">
            <Button size="lg">Neem contact op</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
