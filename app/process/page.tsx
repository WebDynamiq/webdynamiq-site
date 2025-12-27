import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Our transparent web development process. From understanding your needs to launch and ongoing support.",
};

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We start by listening. We discuss your business goals, target audience, and budget to define the scope of the project."
    },
    {
      number: "02",
      title: "Proposal & Planning",
      description: "We provide a transparent proposal with clear deliverables and pricing. No hidden fees or surprises."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We build your solution using modern technologies, keeping you updated with regular progress reports."
    },
    {
      number: "04",
      title: "Feedback & Refinement",
      description: "We review the work together and make necessary adjustments to ensure everything meets your expectations."
    },
    {
      number: "05",
      title: "Launch & Training",
      description: "We handle the technical launch and show you how to manage your new website or application."
    },
    {
      number: "06",
      title: "Ongoing Support",
      description: "We remain available for updates, security checks, and any future improvements you might need."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">How We Work</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A transparent, collaborative process designed to deliver results without the stress.
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
            <h2 className="text-2xl font-bold mb-6">Ready to start the conversation?</h2>
            <Link href="/contact">
              <Button size="lg">Schedule a Call</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
