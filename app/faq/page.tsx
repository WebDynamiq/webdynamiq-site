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
      question: "Werken jullie alleen met grote bedrijven?",
      answer: "Helemaal niet! Wij zijn gespecialiseerd in het werken met kleine bedrijven, startups en lokale ondernemingen. Wij geloven dat professioneel webdevelopment toegankelijk moet zijn voor bedrijven van elke omvang."
    },
    {
      question: "Wat als mijn budget beperkt is?",
      answer: "Wij zijn trots op onze flexibiliteit. Als u een specifiek budget heeft, laat het ons weten. We kunnen vaak de scope van het project aanpassen of alternatieve oplossingen voorstellen om aan uw financiële eisen te voldoen zonder in te leveren op kwaliteit."
    },
    {
      question: "Kunnen de prijzen worden aangepast?",
      answer: "Ja. Onze prijspakketten zijn startpunten. We bieden offertes op maat op basis van uw specifieke behoeften. Als u bepaalde functies niet nodig heeft, hoeft u er ook niet voor te betalen."
    },
    {
      question: "Bieden jullie doorlopende ondersteuning?",
      answer: "Absoluut. We bieden diverse onderhouds- en ondersteuningspakketten om ervoor te zorgen dat uw website veilig, up-to-date en soepel blijft draaien na de lancering. We gaan voor een langdurige samenwerking."
    },
    {
      question: "Hoe lang duurt een project?",
      answer: "De tijdlijn hangt af van de complexiteit van het project. Een eenvoudige bedrijfswebsite kan in 2-4 weken klaar zijn, terwijl maatwerk applicaties of webshops 6-12 weken kunnen duren. We geven een duidelijke tijdlijn in ons voorstel."
    },
    {
      question: "Bouwen jullie schaalbare oplossingen?",
      answer: "Ja. We bouwen met groei in gedachten. Of u nu klein begint en later functies wilt toevoegen, of een systeem nodig heeft dat duizenden gebruikers aankan, we gebruiken technologieën (zoals Next.js) die met uw bedrijf meegroeien."
    },
    {
      question: "Kan ik de website zelf bijwerken?",
      answer: "Ja! We bouwen websites doorgaans met een Content Management Systeem (CMS) of gebruiksvriendelijke interface waarmee u eenvoudig tekst, afbeeldingen en blogposts kunt bijwerken zonder code te hoeven schrijven."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Veelgestelde Vragen</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Heeft u vragen? Wij hebben antwoorden. Als u niet vindt wat u zoekt, neem dan gerust contact op.
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

          <div className="mt-16 text-center bg-primary/5 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Nog steeds vragen?</h3>
            <p className="text-muted-foreground mb-6">
              We praten graag met u om alles te verduidelijken.
            </p>
            <Link href="/contact">
              <Button>Neem contact op</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
