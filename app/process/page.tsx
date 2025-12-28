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
          <h1 className="text-4xl font-bold tracking-tight mb-6">Een helder proces zonder verrassingen</h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4">
            Van idee tot realiteit in duidelijke stappen.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Een transparant, samenwerkingsgericht proces ontworpen om resultaten te leveren zonder stress.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start relative">
                {/* Connecting Line (except for last item) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute left-[2.5rem] top-16 bottom-[-3rem] w-0.5 bg-muted" />
                )}
                
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-2xl z-10 bg-background">
                  {step.number}
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Klaar om te beginnen?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Neem vandaag nog contact op voor een vrijblijvend gesprek over uw project.
          </p>
          <Link href="/contact">
            <Button size="lg">Start uw project</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
