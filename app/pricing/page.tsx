import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check, X, Server, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarieven & Pakketten",
  description: "Transparante prijzen voor webdevelopment, hosting en onderhoud.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-24 bg-linear-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-lines text-primary/10 pointer-events-none mask-[linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance animate-fade-in-up">
            Investering in <span className="text-primary">kwaliteit en groei</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance animate-fade-in-up animation-delay-100">
            Duidelijke afspraken, geen verrassingen achteraf.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance animate-fade-in-up animation-delay-200">
            Kies het pakket dat past bij uw ambities.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          
          {/* Build Packages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            
            {/* Starter */}
            <Card className="flex flex-col animate-fade-in-up animation-delay-300">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Voor zelfstandigen en kleine bedrijven die snel professioneel online willen zijn</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€1.250</span>
                  <span className="text-muted-foreground"> / vanaf</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Inbegrepen</h4>
                    <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Maximaal 5 pagina’s</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Vastgelegde structuur</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Design afgestemd op sector</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Mobiel-responsief</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Basis SEO (technisch + metadata)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Contactformulier</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">1 revisieronde</span>
                    </li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Niet inbegrepen</h4>
                    <ul className="space-y-3 text-muted-foreground/80">
                        <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-muted-foreground shrink-0" />
                            <span className="text-sm">Blog / nieuws / CMS</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-muted-foreground shrink-0" />
                            <span className="text-sm">Complexe animaties</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-muted-foreground shrink-0" />
                            <span className="text-sm">Copywriting</span>
                        </li>
                    </ul>
                </div>

                <div className="mt-6 bg-muted/50 p-3 rounded-md text-xs text-muted-foreground">
                    <span className="font-semibold block mb-1">Belangrijk:</span>
                    Dit is een strak afgebakend pakket om kwaliteit en snelheid te garanderen. Extra pagina’s of wijzigingen buiten scope worden apart gequoteerd.
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Kies Starter</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Professioneel */}
            <Card className="flex flex-col border-primary relative border hover:shadow-primary/25 animate-fade-in-up animation-delay-400">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-bl-md rounded-br-md text-xs font-medium">
                Meest Gekozen
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Professioneel</CardTitle>
                <CardDescription>Voor groeiende bedrijven die hun website actief willen inzetten</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€1.750</span>
                  <span className="text-muted-foreground"> / vanaf</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Inbegrepen</h4>
                    <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Maximaal 8-10 pagina’s</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Eigen design (binnen huisstijl)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Basis CMS voor contentupdates</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Blog of nieuwssectie</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Analytics integratie</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Geavanceerde SEO-structuur</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">2 revisierondes</span>
                    </li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Niet inbegrepen</h4>
                    <ul className="space-y-3 text-muted-foreground/80">
                        <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-muted-foreground shrink-0" />
                            <span className="text-sm">E-commerce</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <X className="h-5 w-5 text-muted-foreground shrink-0" />
                            <span className="text-sm">API-koppelingen</span>
                        </li>
                    </ul>
                </div>
                
                <div className="mt-6 bg-muted/50 p-3 rounded-md text-xs text-muted-foreground">
                    Extra pagina’s, functionaliteit of revisies worden apart gequoteerd.
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Kies Professioneel</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Groei */}
            <Card className="flex flex-col animate-fade-in-up animation-delay-500">
              <CardHeader>
                <CardTitle className="text-2xl">Groei</CardTitle>
                <CardDescription>Voor bedrijven met specifieke of technische noden</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€1.795+</span>
                  <span className="text-muted-foreground"> / op maat</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Mogelijkheden</h4>
                    <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Altijd maatwerk</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">E-commerce (Shopify/Maatwerk)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Dashboards & Portalen</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">API-integraties</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary shrink-0" />
                        <span className="text-sm">Geavanceerde filters</span>
                    </li>
                    </ul>
                </div>
                <p className="text-sm text-muted-foreground">
                  Prijs wordt bepaald na een uitgebreide intake waarin we uw wensen en doelen in kaart brengen.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Offerte aanvragen</Button>
                </Link>
              </CardFooter>
            </Card>

           <div className="text-center w-full col-span-full">
                        <p className="text-sm text-muted-foreground animate-fade-in-up animation-delay-200">
                        SEO betekent technische optimalisatie en structuur. Rankings of posities in Google kunnen niet worden gegarandeerd.
                    </p>

            </div>

          </div>
            
         
          {/* Hosting & Technisch Beheer */}
          <div className="mb-24 bg-muted/30 border rounded-2xl p-8 md:p-12 relative overflow-hidden">
             <div className="flex flex-col md:flex-row gap-8 items-start justify-between relative z-10">
                <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Server className="h-8 w-8 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold">Technisch Beheer & Hosting</h2>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                        De technische basis om uw website veilig, snel en bereikbaar te houden. 
                        Verplicht bij hosting via WebDynamiq.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="text-sm">Premium Hosting</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="text-sm">SSL Certificaat</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="text-sm">Technische updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-primary" />
                            <span className="text-sm">Kleine technische fixes</span>
                        </div>
                    </div>
                </div>
                <div className="bg-background p-6 rounded-xl border shadow-xs min-w-[250px] text-center">
                    <span className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">Vanaf</span>
                    <div className="text-4xl font-bold text-primary my-2">€30</div>
                    <span className="text-muted-foreground text-sm">per maand</span>
                </div>
             </div>
          </div>

          {/* Maintenance Plans */}
          <div className="mb-24" id="maintenance">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">Onderhoud & Support</h2>
                <p className="text-lg text-muted-foreground">
                Optioneel voor wie extra zekerheid, ondersteuning of proactief advies wenst.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Basis */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Basis</CardTitle>
                        <div className="mt-2">
                            <span className="text-2xl font-bold">€75</span>
                            <span className="text-muted-foreground text-sm"> / maand</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Security updates</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Dagelijkse back-ups</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>24/7 Monitoring</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Technische bugfixes</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Link href="/contact" className="w-full"><Button variant="outline" className="w-full">Kies Basis</Button></Link>
                    </CardFooter>
                </Card>

                {/* Groei */}
                <Card className="flex flex-col border-primary relative border hover:shadow-primary/25 animate-fade-in-up animation-delay-400">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-bl-md rounded-br-md text-xs font-medium">
                        Aanbevolen
                    </div>
                    <CardHeader>
                        <CardTitle className="text-xl">Groei</CardTitle>
                        <div className="mt-2">
                            <span className="text-2xl font-bold">€195</span>
                            <span className="text-muted-foreground text-sm"> / maand</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span className="font-medium">Alles van Basis</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>1 uur content/aanpassingen</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Maandelijks prestatierapport</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Voorrang bij support</span>
                            </li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Link href="/contact" className="w-full"><Button className="w-full">Kies Groei</Button></Link>
                    </CardFooter>
                </Card>

                {/* Partner */}
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Partner</CardTitle>
                        <div className="mt-2">
                            <span className="text-2xl font-bold">€395</span>
                            <span className="text-muted-foreground text-sm"> / maand</span>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span className="font-medium">Alles van Groei</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>4 uur content/aanpassingen</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Strategisch advies</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <Check className="h-4 w-4 text-primary shrink-0" />
                                <span>Direct contact</span>
                            </li>
                        </ul>
                        <p className="text-xs text-muted-foreground italic mt-4">
                            Ongebruikte uren vervallen per maand.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Link href="/contact" className="w-full"><Button variant="outline" className="w-full">Kies Partner</Button></Link>
                    </CardFooter>
                </Card>
            </div>
          </div>

          {/* Transparantie & Samenwerking */}
          <div className="max-w-4xl mx-auto bg-muted/20 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-primary/10 p-4 rounded-full shrink-0">
                    <Info className="h-8 w-8 text-primary" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-4">Transparantie & Samenwerking</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Een succesvol project begint bij duidelijke afspraken. Ik geloof in volledige transparantie over wat wel en niet is inbegrepen.
                        </p>
                        <p>
                            <strong>Scope bewaking:</strong> Om de kwaliteit en planning te garanderen, bakenen we de opdracht helder af. Extra wensen tijdens het traject? Geen probleem. We bespreken de impact op budget en timing altijd vooraf.
                        </p>
                        <p>
                            Zo weet u precies waar u aan toe bent en kan ik de focus houden op het leveren van het beste resultaat.
                        </p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
