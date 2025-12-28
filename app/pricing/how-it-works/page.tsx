import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Hoe Prijzen Werken",
  description: "Begrijp mijn transparante prijsmodel. Ik bied flexibele webdevelopment oplossingen aangepast aan uw specifieke behoeften en budget.",
};

export default function HowPricingWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-linear-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-lines text-primary/10 pointer-events-none mask-[linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-4xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Een prijsmodel gebaseerd op <span className="text-primary">vertrouwen en waarde</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance">
            Ik geloof dat professioneel webdevelopment toegankelijk moet zijn.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Geen 'uurtje-factuurtje' mentaliteit, maar een partnerschap gericht op resultaat.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Mijn Prijsfilosofie</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Bij Webdynamiq geloof ik niet in "one size fits all". 
                  <br />
                  Elk bedrijf is uniek, en dat geldt ook voor uw digitale behoeften.
                </p>
                <p className="mb-4">
                  Of u nu een lokale startup bent die een eenvoudige landingspagina nodig heeft of een gevestigd bedrijf dat op zoek is naar een complexe webapplicatie, 
                  ik benader prijzen met hetzelfde doel: <strong>maximale waarde leveren voor uw budget.</strong>
                </p>
                <p>
                  Ik werk met een slanke structuur.
                  <br />
                  Dat betekent dat u betaalt voor deskundige ontwikkeling en persoonlijke service, niet voor dure kantoorkosten of accountmanagers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Steps */}
      <section className="py-24 relative overflow-hidden border-y">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center">Hoe ik uw prijs bepaal</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Eerste Kennismaking</h3>
                <p className="text-muted-foreground">
                  Ik begin met een gesprek. Ik luister naar uw ideeën, begrijp uw bedrijfsdoelen en bespreek openlijk uw beschikbare budget. 
                  <br />
                  Dit is geen verkooppraatje; het is een ontdekkingssessie om te zien of we een goede match zijn.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scope & Voorstel</h3>
                <p className="text-muted-foreground">
                  Op basis van ons gesprek definieer ik de scope van het werk. Ik schets precies welke functies u nodig heeft en welke niet. 
                  <br />
                  Ik bied een duidelijk, gespecificeerd voorstel zodat u precies weet waar uw geld naartoe gaat.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexibiliteit & Aanpassingen</h3>
                <p className="text-muted-foreground">
                  Mijn vanafprijzen zijn precies dat, een startpunt. Als het voorstel uw budget overschrijdt, loop ik niet zomaar weg. 
                  <br />
                  Ik zoek naar oplossingen. Kunnen we het project faseren? Kunnen we een functie vereenvoudigen? Ik werk met u samen om de gulden middenweg te vinden.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Overeenkomst & Start</h3>
                <p className="text-muted-foreground">
                  Zodra we het eens zijn over de scope en prijs, ga ik aan de slag. Geen verrassingsfacturen, geen verborgen kosten. 
                  <br />
                  Ik houd u op de hoogte tijdens het ontwikkelingsproces totdat uw site klaar is voor lancering.
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
                  Waarschijnlijk niet. Ik werk graag met kleine bedrijven en startups. 
                  <br />
                  Als u een beperkt budget heeft, wees dan eerlijk tegen mij. Ik kan vaak een gestroomlijnde oplossing of een gefaseerde aanpak aanbevelen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Rekent u per uur of per project?</h3>
                <p className="text-muted-foreground">
                  Voor de meeste websites en applicaties geef ik de voorkeur aan <strong>projectprijzen</strong>. Dit geeft u zekerheid en gemoedsrust. 
                  <br />
                  Voor doorlopend onderhoud of kleine updates later kan ik uurtarieven of ondersteuningspakketten bespreken.
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
            Klaar om te zien wat ik voor u kan betekenen? 
            <br />
            Vraag vandaag nog een gratis, vrijblijvende offerte aan.
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
