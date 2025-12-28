import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Onze Werkwijze",
  description: "Ons transparante webdevelopment proces. Van het begrijpen van uw behoeften tot lancering en doorlopende ondersteuning.",
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Ontdekking & Strategie",
      description: "We beginnen met luisteren. We bespreken uw bedrijfsdoelen, doelgroep en budget om de scope van het project te bepalen."
    },
    {
      number: "02",
      title: "Voorstel & Planning",
      description: "We bieden een transparant voorstel met duidelijke resultaten en prijzen. Geen verborgen kosten of verrassingen."
    },
    {
      number: "03",
      title: "Ontwerp & Ontwikkeling",
      description: "We bouwen uw oplossing met moderne technologieën en houden u op de hoogte met regelmatige voortgangsrapporten."
    },
    {
      number: "04",
      title: "Feedback & Verfijning",
      description: "We bekijken het werk samen en maken de nodige aanpassingen om ervoor te zorgen dat alles aan uw verwachtingen voldoet."
    },
    {
      number: "05",
      title: "Lancering & Training",
      description: "We regelen de technische lancering en laten u zien hoe u uw nieuwe website of applicatie beheert."
    },
    {
      number: "06",
      title: "Doorlopende Ondersteuning",
      description: "We blijven beschikbaar voor updates, beveiligingschecks en eventuele toekomstige verbeteringen die u nodig heeft."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Onze Werkwijze</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Een transparant, samenwerkingsgericht proces ontworpen om resultaten te leveren zonder stress.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="bg-card border rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold mb-6">Klaar om het gesprek te starten?</h2>
            <Link href="/contact">
              <Button size="lg">Plan een gesprek</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
