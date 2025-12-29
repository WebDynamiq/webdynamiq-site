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
      <section className="py-24 bg-linear-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-lines text-primary/10 pointer-events-none mask-[linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance animate-fade-in-up">
            Transparante tarieven die <br className="hidden md:block" />
            <span className="text-primary">werken voor uw situatie</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance animate-fade-in-up animation-delay-100">
            Professionele kwaliteit zonder onverwachte kosten.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up animation-delay-200">
            Geen verborgen kleine lettertjes. 
            <br className="hidden sm:block" />
            U weet vooraf precies waar u aan toe bent.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          
          {/* Intro Block */}
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up animation-delay-300">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mijn tarieven zijn richtlijnen, geen vaste grenzen.
              <br />
              Elk project is anders. Daarom stemmen we functionaliteit, scope en prijs samen af.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Tier 1: Starter */}
            <Card className="flex flex-col animate-fade-in-up animation-delay-300">
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
            <Card className="flex flex-col border-primary relative border hover:shadow-primary/25 animate-fade-in-up animation-delay-400">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-bl-md rounded-br-md text-xs font-medium">
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
            <Card className="flex flex-col animate-fade-in-up animation-delay-500">
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
                    <span className="text-sm">E-commerce (Shopify of maatwerk)</span>
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

          {/* E-commerce Note */}
          <div className="mt-12 text-center max-w-2xl mx-auto">
            <p className="text-muted-foreground italic">
              Voor webshops bekijken we samen welke oplossing het best past bij uw situatie. 
              Zo bent u zeker van een veilige en duurzame oplossing.
            </p>
          </div>

          {/* Maatwerk Section */}
          <div className="mt-16 bg-linear-to-r from-muted/50 to-background border rounded-2xl p-8 md:p-12 relative overflow-hidden animate-fade-in-up animation-delay-500">
            <div className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-primary/5 to-transparent"></div>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between relative z-10">
              <div className="space-y-4 max-w-2xl">
                <h2 className="text-3xl font-bold">Maatwerk</h2>
                <p className="text-lg text-muted-foreground">
                  Voor projecten die speciale functionaliteiten nodig hebben, zoals aangepaste webapplicaties, integraties of specifieke dashboards.
                </p>
                <p className="font-medium">
                  Prijs op aanvraag, volledig afgestemd op uw behoeften en budget.
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
                Alle prijzen zijn indicatief. Elk project is anders, en ik zoek altijd naar een oplossing die past bij uw behoeften en budget. 
                <br className="hidden sm:block" />
                Voor maatwerk bespreken we samen de scope en prijs, zodat u precies weet wat u krijgt.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium pt-4">
              <Link href="/pricing/how-it-works" className="text-primary hover:underline flex items-center gap-1">
                Meer weten over hoe mijn prijzen werken? Lees meer &rarr;
              </Link>
              <Link href="/maintenance" className="text-primary hover:underline flex items-center gap-1">
                Op zoek naar doorlopende ondersteuning? Bekijk mijn onderhoudsplannen &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
