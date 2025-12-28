import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, MessageSquare, TrendingUp, Lightbulb, Layers, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-linear-to-br from-muted via-background to-background">        
        <div className="absolute inset-0 bg-dots text-primary/10 pointer-events-none"></div> 
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium border-primary/20 bg-primary/5 text-primary">
            Webdynamiq
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
            Ik bekijk samen met u wat u nodig heeft en wat haalbaar is binnen uw budget.
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
      <section className="py-24 bg-muted/30 relative overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Waarom kiezen voor Webdynamiq?</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ik geloof in een samenwerking gebaseerd op vertrouwen, kwaliteit en direct contact.
              Geen black box, maar een transparante partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <Card className="bg-background/50 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <CardTitle>Transparantie & Eerlijkheid</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Geen verborgen kosten of technisch jargon. Ik geef eerlijk advies over wat u wel én niet nodig heeft voor uw doelen.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <CardTitle>Directe Communicatie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  U spreekt rechtstreeks met mij, de ontwikkelaar. Korte lijnen zorgen voor snelle schakelingen en voorkomen misverstanden.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/50 border-primary/10 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle>Focus op Resultaat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Een mooie website is niet genoeg. Ik bouw snelle, veilige en schaalbare oplossingen die uw bedrijf helpen groeien.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Process Section */}
          <div className="bg-background rounded-3xl p-8 md:p-12 border shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4">Mijn Werkwijze</h3>
              <p className="text-muted-foreground">Van eerste idee tot succesvolle lancering in vier heldere stappen.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10"></div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">1</div>
                </div>
                <h4 className="font-semibold mb-2">Kennismaking</h4>
                <p className="text-sm text-muted-foreground">Ik bespreek uw wensen, doelen en budget in een vrijblijvend gesprek.</p>
              </div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">2</div>
                </div>
                <h4 className="font-semibold mb-2">Voorstel & Plan</h4>
                <p className="text-sm text-muted-foreground">U ontvangt een helder plan van aanpak en een transparante offerte.</p>
              </div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">3</div>
                </div>
                <h4 className="font-semibold mb-2">Ontwikkeling</h4>
                <p className="text-sm text-muted-foreground">Ik bouw uw oplossing en houd u op de hoogte van de voortgang.</p>
              </div>

              <div className="relative pt-4 md:pt-0 text-center">
                <div className="bg-background relative z-10 inline-block">
                  <div className="h-12 w-12 rounded-full bg-primary/5 border border-primary/20 flex items-center justify-center mb-4 mx-auto text-primary font-bold">4</div>
                </div>
                <h4 className="font-semibold mb-2">Lancering</h4>
                <p className="text-sm text-muted-foreground">Na uitgebreid testen gaat uw site live, inclusief nazorg en support.</p>
              </div>
            </div>
          </div>

          {/* Reserved for Testimonials */}
          <div id="testimonials-placeholder" className="hidden mt-20 text-center">
            {/* Future testimonials component will be injected here */}
            <p className="text-muted-foreground italic">"Ruimte voor toekomstige reviews"</p>
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
