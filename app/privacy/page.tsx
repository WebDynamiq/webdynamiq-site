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
          Welkom bij Webdynamiq. Wij respecteren uw privacy en zetten ons in voor de bescherming van uw persoonsgegevens. 
          Dit privacybeleid informeert u over hoe wij met uw persoonsgegevens omgaan wanneer u onze website bezoekt 
          en vertelt u over uw privacyrechten en hoe de wet u beschermt.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">2. Gegevens die we verzamelen</h2>
        <p className="mb-4">
          We kunnen verschillende soorten persoonsgegevens over u verzamelen, gebruiken, opslaan en overdragen, die we als volgt hebben gegroepeerd:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Identiteitsgegevens omvatten voornaam, achternaam, gebruikersnaam of soortgelijke identificatie.</li>
          <li>Contactgegevens omvatten e-mailadres en telefoonnummer.</li>
          <li>Technische gegevens omvatten internetprotocol (IP) adres, browsertype en -versie, tijdzone-instelling en locatie, browser plug-in types en versies, besturingssysteem en platform en andere technologie op de apparaten die u gebruikt om deze website te bezoeken.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">3. Hoe we uw gegevens gebruiken</h2>
        <p className="mb-4">
          We gebruiken uw persoonsgegevens alleen wanneer de wet ons dat toestaat. Meestal gebruiken we uw persoonsgegevens in de volgende omstandigheden:
        </p>
        <ul className="list-disc list-inside mb-4 space-y-2">
          <li>Waar we het contract moeten uitvoeren dat we met u gaan sluiten of hebben gesloten.</li>
          <li>Waar het noodzakelijk is voor onze gerechtvaardigde belangen (of die van een derde partij) en uw belangen en grondrechten niet zwaarder wegen dan die belangen.</li>
          <li>Waar we moeten voldoen aan een wettelijke of regelgevende verplichting.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-4">4. Neem contact op</h2>
        <p className="mb-4">
          Als u vragen heeft over dit privacybeleid of onze privacypraktijken, neem dan contact met ons op via hello@webdynamiq.com.
        </p>
      </div>
    </div>
  );
}
