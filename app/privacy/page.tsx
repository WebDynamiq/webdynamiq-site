import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description: "Privacybeleid voor Webdynamiq.",
};

export default function PrivacyPage() {
  return (
    <div className="container px-4 md:px-8 mx-auto max-w-3xl py-20">
      <h1 className="text-3xl font-bold mb-8">Privacybeleid</h1>
      <div className="prose prose-slate max-w-none">
        <p className="text-muted-foreground mb-4">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
        
        <h2 className="text-xl font-semibold mt-8 mb-4">1. Inleiding</h2>
        <p className="mb-4">
          Welkom bij Webdynamiq. Ik respecteer uw privacy en zet mij in voor de bescherming van uw persoonsgegevens. 
          Dit privacybeleid informeert u over hoe ik met uw persoonsgegevens omga wanneer u mijn website bezoekt 
          en vertelt u over uw privacyrechten en hoe de wet u beschermt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Gegevens die ik verzamel</h2>
        <p className="mb-4">
          Ik kan verschillende soorten persoonsgegevens over u verzamelen, gebruiken, opslaan en overdragen, die ik als volgt heb gegroepeerd:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Identiteitsgegevens omvatten voornaam, achternaam, gebruikersnaam of soortgelijke identificatie.</li>
          <li>Contactgegevens omvatten e-mailadres en telefoonnummer.</li>
          <li>Technische gegevens omvatten internetprotocol (IP) adres, browsertype en -versie, tijdzone-instelling en locatie, browser plug-in types en versies, besturingssysteem en platform en andere technologie op de apparaten die u gebruikt om deze website te bezoeken.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Hoe ik uw gegevens gebruik</h2>
        <p className="mb-4">
          Ik gebruik uw persoonsgegevens alleen wanneer de wet mij dat toestaat. Meestal gebruik ik uw persoonsgegevens in de volgende omstandigheden:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Waar ik het contract moet uitvoeren dat ik met u ga sluiten of heb gesloten.</li>
          <li>Waar het noodzakelijk is voor mijn gerechtvaardigde belangen (of die van een derde partij) en uw belangen en grondrechten niet zwaarder wegen dan die belangen.</li>
          <li>Waar ik moet voldoen aan een wettelijke of regelgevende verplichting.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Neem contact op</h2>
        <p className="mb-4">
          Als u vragen heeft over dit privacybeleid of mijn privacypraktijken, neem dan contact met mij op via hello@webdynamiq.com.
        </p>
      </div>
    </div>
  );
}
