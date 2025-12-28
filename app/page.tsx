import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <Badge variant="secondary" className="mb-6">
            Webdynamiq Agency
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Een premium webpartner die <br className="hidden md:block" />
            <span className="text-primary">zich aanpast aan uw budget</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Wij bouwen professionele websites en digitale oplossingen voor kleine bedrijven en startups. 
            Geen enterprise-prijzen, maar eerlijke kwaliteit en een langdurige samenwerking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Start uw project</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">Bekijk diensten</Button>
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
              Van eenvoudige landingspagina's tot complexe webapplicaties, wij leveren oplossingen die uw bedrijf helpen groeien.
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
                  Snelle, SEO-geoptimaliseerde websites die bezoekers omzetten in klanten. Perfect voor lokale bedrijven en dienstverleners.
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
                  Webapps, dashboards en interne tools gebouwd om uw processen te stroomlijnen en specifieke problemen op te lossen.
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
                  Schaalbare webshops met veilige betalingen en eenvoudig voorraadbeheer. Begin met verkopen aan de wereld.
                </p>
                <Link href="/services" className="text-primary font-medium hover:underline">Meer info &rarr;</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Waarom kiezen voor Webdynamiq?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexibele Prijzen</h3>
                    <p className="text-muted-foreground">Wij passen onze oplossingen aan uw budget aan, niet andersom.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Mensgerichte Aanpak</h3>
                    <p className="text-muted-foreground">Wij luisteren, begrijpen en communiceren helder. Geen technisch jargon.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Langdurige Samenwerking</h3>
                    <p className="text-muted-foreground">Wij bouwen niet alleen en vertrekken. Wij zijn er om uw groei te ondersteunen.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background p-8 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Klaar om te beginnen?</h3>
              <p className="text-muted-foreground mb-6">
                Laten we uw project bespreken en de beste oplossing voor uw behoeften vinden.
              </p>
              <Link href="/contact">
                <Button className="w-full">Plan een gratis gesprek</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
