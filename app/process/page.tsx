import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Onze Werkwijze",
  description:
    "Mijn transparante webdevelopment proces. Van het begrijpen van uw behoeften tot lancering en doorlopende ondersteuning.",
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Ontdekking & Strategie",
      description:
        "Ik begin met luisteren. Ik bespreek uw bedrijfsdoelen, doelgroep en budget om de scope van het project te bepalen.",
    },
    {
      number: "02",
      title: "Voorstel & Planning",
      description:
        "Ik bied een transparant voorstel met duidelijke resultaten en prijzen. Geen verborgen kosten of verrassingen.",
    },
    {
      number: "03",
      title: "Ontwerp & Ontwikkeling",
      description:
        "Ik bouw uw oplossing met moderne technologieën en houd u op de hoogte met regelmatige voortgangsrapporten.",
    },
    {
      number: "04",
      title: "Feedback & Verfijning",
      description:
        "Ik bekijk het werk samen met u en maak de nodige aanpassingen om ervoor te zorgen dat alles aan uw verwachtingen voldoet.",
    },
    {
      number: "05",
      title: "Lancering & Training",
      description:
        "Ik regel de technische lancering en laat u zien hoe u uw nieuwe website of applicatie beheert.",
    },
    {
      number: "06",
      title: "Doorlopende Ondersteuning",
      description:
        "Ik blijf beschikbaar voor updates, beveiligingschecks en eventuele toekomstige verbeteringen die u nodig heeft.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 bg-linear-to-b from-muted/50 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-lines text-primary/10 pointer-events-none mask-[linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Een helder proces{" "}
            <span className="text-primary">zonder verrassingen</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance">
            Van idee tot realiteit in duidelijke stappen.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Een transparant, samenwerkingsgericht proces ontworpen om resultaten
            te leveren zonder stress.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-start relative"
              >
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

      <section className="py-24 relative overflow-hidden">
        <div className="container px-4 md:px-8 mx-auto max-w-5xl">
          <div className="bg-linear-to-br from-primary/10 to-primary/5 border border-primary/10 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/20 to-transparent"></div>
            <h2 className="text-3xl font-bold mb-4">Klaar om te beginnen?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed text-lg">
              Neem vandaag nog contact op voor een vrijblijvend gesprek over uw
              project.
            </p>
            <Link href="/contact">
              <Button size="lg">Start uw project</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
