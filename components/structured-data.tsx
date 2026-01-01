export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Webdynamiq",
    "url": "https://www.webdynamiq.com",
    "logo": "https://www.webdynamiq.com/images/logo-icon-only-transparent.png",
    "image": "https://www.webdynamiq.com/images/logo-brand-name.png",
    "description": "Ik help bedrijven groeien met premium websites en digitale oplossingen aangepast aan hun budget.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Steenweg op Ravels 129",
      "addressLocality": "Oud-Turnhout",
      "addressCountry": "BE"
    },
    "telephone": "+32 474 10 20 98",
    "email": "info@webdynamiq.com",
    // "sameAs": [
    //   "https://www.linkedin.com/in/username",
    //   "https://www.facebook.com/username"
    // ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
