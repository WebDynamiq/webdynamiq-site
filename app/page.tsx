import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-linear-to-br from-muted via-background to-background">        
        <div className="absolute inset-0 bg-dots text-primary/10 pointer-events-none"></div> 
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
            Webdynamiq Agency
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance">
            Premium webdesign dat <br className="hidden md:block" />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-primary/60">
              meegroeit met uw ambities
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground max-w-2xl mx-auto mb-6 text-balance">
            Professionele kwaliteit zonder dure enterprise-prijzen.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-balance">
            Geen vaste pakketten die niet passen. <br className="hidden sm:block" />
            We bekijken samen wat u nodig heeft en wat haalbaar is binnen uw budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base shadow-lg shadow-primary/20">Start uw project</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base">Bekijk diensten</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Wat we doen</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van eenvoudige landingspagina's tot complexe webapplicaties.
              <br />
              Wij leveren oplossingen die uw bedrijf helpen groeien.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Bedrijfswebsites</CardTitle>
                <CardDescription>Professionele uitstraling voor uw merk</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Snelle, SEO-geoptimaliseerde websites die bezoekers omzetten in klanten. 
                  <br />
                  Perfect voor lokale bedrijven en dienstverleners.
                </p>
                <Link href="/services" className="text-primary font-medium hover:underline">Meer info &rarr;</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Maatwerk Applicaties</CardTitle>
                <CardDescription>Tools op maat van uw behoeften</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Webapps, dashboards en interne tools.
                  <br />
                  Gebouwd om uw processen te stroomlijnen en specifieke problemen op te lossen.
                </p>
                <Link href="/services" className="text-primary font-medium hover:underline">Meer info &rarr;</Link>
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
                <Link href="/services" className="text-primary font-medium hover:underline">Meer info &rarr;</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-primary/5 relative">
        <div className="absolute inset-0 bg-lines text-primary/5 pointer-events-none mask-[linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Waarom kiezen voor Webdynamiq?</h2>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexibele Prijzen</h3>
                    <p className="text-muted-foreground">
                      Wij passen onze oplossingen aan uw budget aan, niet andersom.
                      <br />
                      Geen onnodige kosten voor functies die u niet gebruikt.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Persoonlijke Aanpak</h3>
                    <p className="text-muted-foreground">
                      U spreekt direct met de ontwikkelaar.
                      <br />
                      Korte lijnen, snelle communicatie en een partner die met u meedenkt.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Focus op Groei</h3>
                    <p className="text-muted-foreground">
                      Wij bouwen niet alleen een website, maar een tool voor uw succes.
                      <br />
                      SEO, snelheid en conversie staan centraal.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-2xl p-8 border shadow-sm">
              <blockquote className="text-lg font-medium leading-relaxed mb-4">
                "Webdynamiq begreep precies wat we nodig hadden als startende onderneming. 
                Geen ingewikkeld jargon, maar een duidelijke taal en een prachtig resultaat binnen ons budget."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-muted" />
                <div>
                  <div className="font-semibold">Tevreden Klant</div>
                  <div className="text-sm text-muted-foreground">Oprichter, Lokale Start-up</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om uw online aanwezigheid te versterken?</h2>
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
