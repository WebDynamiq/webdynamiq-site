import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Webdynamiq. Bespreek uw webproject, vraag een offerte aan of stel een vraag.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Neem Contact Op</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Heeft u een project in gedachten? Laten we bespreken hoe we uw bedrijf kunnen helpen groeien.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">We horen graag van u</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Of u nu klaar bent om een project te starten of gewoon een paar vragen heeft, wij zijn er om te helpen. Geen druk, geen verkooppraatje.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-2">E-mail ons</h3>
                  <p className="text-muted-foreground">hello@webdynamiq.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Locatie</h3>
                  <p className="text-muted-foreground">België / EU (Remote)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wat gebeurt er hierna?</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>We bekijken uw bericht binnen 24 uur.</li>
                    <li>We plannen een kort gesprek om uw behoeften te begrijpen.</li>
                    <li>We zorgen voor een voorstel en offerte op maat.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Stuur ons een bericht</CardTitle>
                <CardDescription>Vul het onderstaande formulier in en we nemen zo snel mogelijk contact met u op.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam</Label>
                      <Input id="name" placeholder="Uw naam" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="uw@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Onderwerp</Label>
                    <Input id="subject" placeholder="Projectaanvraag" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Vertel ons over uw project, budget en tijdlijn..." 
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Verstuur Bericht</Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
