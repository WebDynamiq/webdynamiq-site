import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Hoe Prijzen Werken",
  description: "Begrijp ons transparante prijsmodel. Wij bieden flexibele webdevelopment oplossingen aangepast aan uw specifieke behoeften en budget.",
};

export default function HowPricingWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Eerlijk, Transparant en <span className="text-primary">Flexibel</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Wij geloven dat professioneel webdevelopment toegankelijk moet zijn. 
            Ons prijsmodel is ontworpen om duidelijk, eerlijk en aanpasbaar te zijn aan uw bedrijfsrealiteit.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Onze Prijsfilosofie</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Bij Webdynamiq geloven we niet in "one size fits all". Elk bedrijf is uniek, en dat geldt ook voor uw digitale behoeften. 
                  Of u nu een lokale startup bent die een eenvoudige landingspagina nodig heeft of een gevestigd bedrijf dat op zoek is naar een complexe webapplicatie, 
                  wij benaderen prijzen met hetzelfde doel: <strong>maximale waarde leveren voor uw budget.</strong>
                </p>
                <p>
                  Wij werken met een slanke structuur, wat betekent dat u betaalt voor deskundige ontwikkeling en persoonlijke service—niet voor dure kantoorkosten of accountmanagers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Steps */}
      <section className="py-20 bg-background border-y">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Hoe wij uw prijs bepalen</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Eerste Kennismaking</h3>
                <p className="text-muted-foreground">
                  We beginnen met een gesprek. We luisteren naar uw ideeën, begrijpen uw bedrijfsdoelen en bespreken openlijk uw beschikbare budget. 
                  Dit is geen verkooppraatje; het is een ontdekkingssessie om te zien of we een goede match zijn.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scope & Voorstel</h3>
                <p className="text-muted-foreground">
                  Op basis van ons gesprek definiëren we de scope van het werk. We schetsen precies welke functies u nodig heeft en welke niet. 
                  We bieden een duidelijk, gespecificeerd voorstel zodat u precies weet waar uw geld naartoe gaat.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexibiliteit & Aanpassingen</h3>
                <p className="text-muted-foreground">
                  Onze vanafprijzen zijn precies dat—een startpunt. Als het voorstel uw budget overschrijdt, lopen we niet zomaar weg. 
                  We zoeken naar oplossingen. Kunnen we het project faseren? Kunnen we een functie vereenvoudigen? We werken met u samen om de gulden middenweg te vinden.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Overeenkomst & Start</h3>
                <p className="text-muted-foreground">
                  Zodra we het eens zijn over de scope en prijs, gaan we aan de slag. Geen verrassingsfacturen, geen verborgen kosten. 
                  We houden u op de hoogte tijdens het ontwikkelingsproces totdat uw site klaar is voor lancering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance / FAQ style section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Is mijn budget te klein?</h3>
                <p className="text-muted-foreground">
                  Waarschijnlijk niet. We werken graag met kleine bedrijven en startups. Als u een beperkt budget heeft, wees dan eerlijk tegen ons. 
                  We kunnen vaak een gestroomlijnde oplossing of een gefaseerde aanpak aanbevelen die u professioneel online brengt zonder te veel uit te geven.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Rekenen jullie per uur of per project?</h3>
                <p className="text-muted-foreground">
                  Voor de meeste websites en applicaties geven we de voorkeur aan <strong>projectprijzen</strong>. Dit geeft u zekerheid en gemoedsrust. 
                  Voor doorlopend onderhoud of kleine updates later kunnen we uurtarieven of ondersteuningspakketten bespreken.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Laten we uw project bespreken</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Klaar om te zien wat we voor u kunnen betekenen? Vraag vandaag nog een gratis, vrijblijvende offerte aan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Vraag een persoonlijke offerte</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Bekijk prijzen</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
