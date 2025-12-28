import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen",
  description: "Antwoorden op veelgestelde vragen over onze webdevelopment diensten, prijzen en werkwijze.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Werk jij alleen met grote bedrijven?",
      answer: "Helemaal niet! Ik ben gespecialiseerd in het werken met kleine bedrijven, startups en lokale ondernemingen. Ik geloof dat professioneel webdevelopment toegankelijk moet zijn voor bedrijven van elke omvang."
    },
    {
      question: "Wat als mijn budget beperkt is?",
      answer: "Ik ben trots op mijn flexibiliteit. Als u een specifiek budget heeft, laat het mij weten. Ik kan vaak de scope van het project aanpassen of alternatieve oplossingen voorstellen om aan uw financiële eisen te voldoen zonder in te leveren op kwaliteit."
    },
    {
      question: "Kunnen de prijzen worden aangepast?",
      answer: "Ja. Mijn prijspakketten zijn startpunten. Ik bied offertes op maat op basis van uw specifieke behoeften. Als u bepaalde functies niet nodig heeft, hoeft u er ook niet voor te betalen."
    },
    {
      question: "Bied jij doorlopende ondersteuning?",
      answer: "Absoluut. Ik bied diverse onderhouds- en ondersteuningspakketten om ervoor te zorgen dat uw website veilig, up-to-date en soepel blijft draaien na de lancering. Ik ga voor een langdurige samenwerking."
    },
    {
      question: "Hoe lang duurt een project?",
      answer: "De tijdlijn hangt af van de complexiteit van het project. Een eenvoudige bedrijfswebsite kan in 2-4 weken klaar zijn, terwijl maatwerk applicaties of webshops 6-12 weken kunnen duren. Ik geef een duidelijke tijdlijn in mijn voorstel."
    },
    {
      question: "Bouw jij schaalbare oplossingen?",
      answer: "Ja. Ik bouw met groei in gedachten. Of u nu klein begint en later functies wilt toevoegen, of een systeem nodig heeft dat duizenden gebruikers aankan, ik gebruik technologieën (zoals Next.js) die met uw bedrijf meegroeien."
    },
    {
      question: "Kan ik de website zelf bijwerken?",
      answer: "Ja! Ik bouw websites doorgaans met een Content Management Systeem (CMS) of gebruiksvriendelijke interface waarmee u eenvoudig tekst, afbeeldingen en blogposts kunt bijwerken zonder code te hoeven schrijven."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-24 md:py-32 relative overflow-hidden bg-linear-to-br from-muted via-background to-background">        
        <div className="absolute inset-0 bg-dots text-primary/10 pointer-events-none"></div> 
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
            Duidelijkheid vooraf, <span className="text-primary">geen vragen achteraf</span>
          </h1>
          <p className="text-xl font-medium text-foreground max-w-2xl mx-auto mb-4 text-balance">
            Antwoorden op de meest gestelde vragen.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Staat uw vraag er niet tussen? Neem gerust contact op.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 relative rounded-2xl overflow-hidden bg-primary/5 p-8 md:p-12 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Nog steeds vragen?</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Ik sta klaar om te helpen. Neem contact op voor een persoonlijk antwoord.
              </p>
              <Link href="/contact">
                <Button size="lg">Stel uw vraag</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
