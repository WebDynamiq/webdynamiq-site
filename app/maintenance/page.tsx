import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Onderhoud & Support",
  description: "Houd uw website veilig en up-to-date met onze flexibele onderhoudsplannen. Professionele ondersteuning voor gemoedsrust.",
};

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Technische zekerheid, zodat u kunt ondernemen</h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4">
            Uw website is een investering die bescherming verdient.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wij regelen de updates, beveiliging en backups. 
            <br className="hidden sm:block" />
            U focust op uw klanten.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Basic */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Basis</CardTitle>
                <CardDescription>Essentiële beveiliging & stabiliteit</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€75</span>
                  <span className="text-muted-foreground"> / maand</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Regelmatige beveiligingsupdates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Dagelijkse back-ups & monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Uptime monitoring (99.9%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Technische bugfixes</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Kies Basis</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Growth */}
            <Card className="flex flex-col border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Aanbevolen
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Groei</CardTitle>
                <CardDescription>Actief beheer & updates</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€195</span>
                  <span className="text-muted-foreground"> / maand</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Alles in Basis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">2 uur content updates/maand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Maandelijks prestatierapport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Prioriteit e-mailondersteuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">SEO gezondheidschecks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Kies Groei</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Custom */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Maatwerk</CardTitle>
                <CardDescription>Voor complexe applicaties</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Op maat</span>
                  <span className="text-muted-foreground"> / offerte</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Volledige applicatieondersteuning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Maatwerk feature ontwikkeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Toegewijd serverbeheer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Noodrespons SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Consultancy & strategie</span>
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

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-base font-medium text-foreground mb-2">
              Flexibele Voorwaarden
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Deze pakketten zijn indicatief. We kunnen een ondersteuningsplan opstellen dat past bij uw specifieke behoeften en budget. 
              <br />
              U zit nooit vast aan diensten die u niet nodig heeft.
            </p>
            <Link href="/contact">
              <Button size="lg">Bespreek ondersteuningsopties</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
