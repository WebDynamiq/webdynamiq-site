import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met Webdynamiq. Bespreek uw webproject, vraag een offerte aan of stel een vraag.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-linear-to-br from-muted via-background to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-dots text-primary/10 pointer-events-none"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Start uw digitale groei <span className="text-primary">vandaag</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance">
            Heeft u een project in gedachten? Laten we praten.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Geen verplichtingen, geen sales-push. 
            <br className="hidden sm:block" />
            Gewoon een eerlijk gesprek over uw doelen.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] mask-[radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 -z-10"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Ik hoor graag van u</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Of u nu klaar bent om een project te starten of gewoon een paar vragen heeft, ik ben er om te helpen. 
                <br />
                Geen druk, geen verkooppraatje.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-2">E-mail mij</h3>
                  <p className="text-muted-foreground">hello@webdynamiq.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Locatie</h3>
                  <p className="text-muted-foreground">België / EU (Remote)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Wat gebeurt er hierna?</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>Ik bekijk uw bericht binnen 24 uur.</li>
                    <li>Ik plan een kort gesprek om uw behoeften te begrijpen.</li>
                    <li>Ik zorg voor een voorstel en offerte op maat.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />

          </div>
        </div>
      </section>
    </div>
  );
}
