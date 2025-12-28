import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene Voorwaarden voor Webdynamiq.",
};

export default function TermsPage() {
  return (
    <div className="container px-4 md:px-8 mx-auto max-w-3xl py-20">
      <h1 className="text-3xl font-bold mb-8">Algemene Voorwaarden</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-muted-foreground mb-4">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Akkoord met voorwaarden</h2>
        <p className="mb-4">
          Door mijn website te bezoeken, gaat u akkoord gebonden te zijn aan deze Algemene Voorwaarden en te voldoen aan alle toepasselijke wet- en regelgeving. 
          Als u niet akkoord gaat met deze voorwaarden, is het u verboden deze site te gebruiken of te bezoeken.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Gebruikslicentie</h2>
        <p className="mb-4">
          Er wordt toestemming verleend om tijdelijk één kopie van het materiaal (informatie of software) op de website van Webdynamiq te downloaden voor persoonlijk, 
          niet-commercieel, tijdelijk gebruik. Dit is het verlenen van een licentie, geen overdracht van eigendom.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
        <p className="mb-4">
          De materialen op de website van Webdynamiq worden geleverd op 'as is' basis. Webdynamiq geeft geen garanties, expliciet of impliciet, 
          en wijst hierbij alle andere garanties af, inclusief, zonder beperking, impliciete garanties of voorwaarden van verkoopbaarheid, 
          geschiktheid voor een bepaald doel, of niet-inbreuk op intellectueel eigendom of andere schending van rechten.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Beperkingen</h2>
        <p className="mb-4">
          In geen geval zal Webdynamiq of haar leveranciers aansprakelijk zijn voor enige schade (inclusief, zonder beperking, schade voor verlies van gegevens of winst, 
          of als gevolg van bedrijfsonderbreking) die voortvloeit uit het gebruik of de onmogelijkheid om de materialen op de website van Webdynamiq te gebruiken.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">5. Toepasselijk recht</h2>
        <p className="mb-4">
          Deze voorwaarden worden beheerst door en geïnterpreteerd in overeenstemming met de wetten van België en u onderwerpt zich onherroepelijk aan de 
          exclusieve bevoegdheid van de rechtbanken in die staat of locatie.
        </p>
      </div>
    </div>
  );
}
