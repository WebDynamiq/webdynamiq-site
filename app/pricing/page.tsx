import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarieven",
  description: "Transparante prijzen voor professioneel webdevelopment. Flexibele pakketten vanaf betaalbare tarieven.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Transparante Tarieven</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professionele kwaliteit zonder de hoofdprijs. Wij passen onze oplossingen aan uw budget aan.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tier 1: Starter */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Perfect voor kleine bedrijven die een professionele online aanwezigheid willen zonder onnodige complexiteit</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€950</span>
                  <span className="text-muted-foreground"> / vanaf</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">1–5 pagina’s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Mobiel-responsief</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Basis SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Contactformulier</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Aan de slag</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Tier 2: Professioneel */}
            <Card className="flex flex-col border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Meest Gekozen
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professioneel</CardTitle>
                <CardDescription>Ideaal voor groeiende bedrijven die hun content zelf willen beheren en zichtbaar online willen zijn</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€1.350</span>
                  <span className="text-muted-foreground"> / vanaf</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">6–10 pagina’s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">CMS voor eenvoudige contentupdates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Blog / nieuwssectie</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Geavanceerde SEO</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Aan de slag</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Tier 3: Groei */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Groei</CardTitle>
                <CardDescription>Voor bedrijven met complexe behoeften of volledige functionaliteit</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€1.795</span>
                  <span className="text-muted-foreground"> / vanaf</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Meer dan 10 pagina’s</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Volledige CMS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Blog, analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Webshop/e-commerce</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">API-integraties</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Prioriteitsondersteuning</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Neem contact op</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* Maatwerk Section */}
          <div className="mt-16 bg-muted/50 rounded-2xl p-8 md:p-12 border">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl font-bold">Maatwerk</h2>
                <p className="text-lg text-muted-foreground">
                  Voor projecten die speciale functionaliteiten nodig hebben, zoals aangepaste webapplicaties, integraties of specifieke dashboards.
                </p>
                <p className="font-medium">
                  Prijs op aanvraag, volledig afgestemd op de behoeften en het budget van de klant.
                </p>
              </div>
              <Link href="/contact">
                <Button size="lg">Vraag een offerte aan</Button>
              </Link>
            </div>
          </div>

          {/* Flexibility Note */}
          <div className="mt-16 text-center max-w-3xl mx-auto space-y-6">
            <div className="bg-primary/5 p-6 rounded-xl">
              <p className="text-base font-medium text-foreground">
                Alle prijzen zijn indicatief. Elk project is anders, en we zoeken altijd naar een oplossing die past bij uw behoeften en budget. Voor maatwerk bespreken we samen de scope en prijs, zodat u precies weet wat u krijgt.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium pt-4">
              <Link href="/pricing/how-it-works" className="text-primary hover:underline flex items-center gap-1">
                Meer weten over hoe onze prijzen werken? Lees meer &rarr;
              </Link>
              <Link href="/maintenance" className="text-primary hover:underline flex items-center gap-1">
                Op zoek naar doorlopende ondersteuning? Bekijk onze onderhoudsplannen &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
