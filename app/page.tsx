import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShieldCheck,
  MessageSquare,
  TrendingUp,
  Lightbulb,
  Layers,
  Rocket,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-32 relative overflow-hidden bg-linear-to-br from-muted via-background to-background">
        <div className="absolute inset-0 bg-dots text-primary/10 pointer-events-none"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <div className="animate-fade-in-up">
            <Badge
              variant="secondary"
              className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary"
            >
              Webdynamiq
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance animate-fade-in-up animation-delay-100">
            Premium webdesign dat <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              meegroeit met uw ambities
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground max-w-2xl mx-auto mb-6 text-balance animate-fade-in-up animation-delay-200">
            Professionele kwaliteit zonder dure enterprise-prijzen.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-balance animate-fade-in-up animation-delay-300">
            Geen vaste pakketten die niet passen.{" "}
            <br className="hidden sm:block" />
            Ik bekijk samen met u wat u nodig heeft en wat haalbaar is binnen uw
            budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Link href="/contact">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-primary/20"
              >
                Start uw project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 px-8 text-base"
              >
                Bekijk diensten
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Wat ik doe</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van eenvoudige landingspagina's tot complexe webapplicaties.
              <br />
              Ik lever oplossingen die uw bedrijf helpen groeien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Bedrijfswebsites</CardTitle>
                <CardDescription>
                  Professionele uitstraling voor uw merk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Snelle, SEO-geoptimaliseerde websites die bezoekers omzetten
                  in klanten.
                  <br />
                  Perfect voor lokale bedrijven en dienstverleners.
                </p>
                <Link
                  href="/services"
                  className="text-primary font-medium hover:underline"
                >
                  Meer info &rarr;
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maatwerk Applicaties</CardTitle>
                <CardDescription>
                  Tools op maat van uw behoeften
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Webapps, dashboards en interne tools.
                  <br />
                  Gebouwd om uw processen te stroomlijnen en specifieke
                  problemen op te lossen.
                </p>
                <Link
                  href="/services"
                  className="text-primary font-medium hover:underline"
                >
                  Meer info &rarr;
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>Verkoop uw producten online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Veilige webshops op basis van Shopify of maatwerk.
                  <br />
                  Betrouwbaar, schaalbaar en eenvoudig te beheren.
                </p>
                <Link
                  href="/services"
                  className="text-primary font-medium hover:underline"
                >
                  Meer info &rarr;
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Waarom kiezen voor Webdynamiq?
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Hoi, ik ben Brent. Bij Webdynamiq werkt u niet met een
                  accountmanager of een supportafdeling, maar direct met mij.
                </p>
                <p>
                  Ik geloof dat de beste resultaten ontstaan door korte lijnen
                  en heldere communicatie. Als solo-ontwikkelaar ben ik volledig
                  betrokken bij uw project, van het eerste idee tot de lancering
                  en daarna.
                </p>

                <div className="grid gap-6 pt-4">
                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Transparant & Eerlijk
                      </h3>
                      <p className="text-base leading-relaxed">
                        Geen verborgen kosten, wel eerlijk advies over wat u
                        echt nodig heeft.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MessageSquare className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Direct Contact
                      </h3>
                      <p className="text-base leading-relaxed">
                        U spreekt rechtstreeks met de ontwikkelaar, niet met een
                        tussenpersoon.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <TrendingUp className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Focus op Resultaat
                      </h3>
                      <p className="text-base leading-relaxed">
                        Ik bouw snelle, veilige oplossingen die uw bedrijf
                        helpen groeien.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md aspect-4/5 rounded-2xl overflow-hidden bg-linear-to-br from-primary/50 via-primary/20 to-background shadow-xl ring-1 ring-black/5">
                <div className="order-last md:order-first relative h-full rounded-xl overflow-hidden border border-primary/10">
                  <Image
                    src="/images/myself.png"
                    alt="Foto developer Webdynamiq"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Process Section */}
          <div className="bg-background rounded-3xl p-8 md:p-12 border shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Mijn Werkwijze</h3>
              <p className="text-muted-foreground">
                Van eerste idee tot succesvolle lancering in vier heldere
                stappen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">
                    1
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Kennismaking</h4>
                <p className="text-sm text-muted-foreground">
                  Ik bespreek uw wensen, doelen en budget in een vrijblijvend
                  gesprek.
                </p>
              </div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">
                    2
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Voorstel & Plan</h4>
                <p className="text-sm text-muted-foreground">
                  U ontvangt een helder plan van aanpak en een transparante
                  offerte.
                </p>
              </div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">
                    3
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Ontwikkeling</h4>
                <p className="text-sm text-muted-foreground">
                  Ik bouw uw oplossing en houd u op de hoogte van de voortgang.
                </p>
              </div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">
                    4
                  </div>
                </div>
                <h4 className="font-semibold mb-2">Lancering</h4>
                <p className="text-sm text-muted-foreground">
                  Na uitgebreid testen gaat uw site live, inclusief nazorg en
                  support.
                </p>
              </div>
            </div>
          </div>

          {/* Reserved for Testimonials */}
          <div
            id="testimonials-placeholder"
            className="hidden mt-20 text-center"
          >
            {/* Future testimonials component will be injected here */}
            <p className="text-muted-foreground italic">
              "Ruimte voor toekomstige reviews"
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">
            Klaar om uw online aanwezigheid te versterken?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Geen standaardprijzen. Geen verrassingen.
            <br />
            Wel duidelijke afspraken en oplossingen op maat.
          </p>
          <Link href="/contact">
            <Button size="lg">Vraag een vrijblijvend gesprek aan</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
