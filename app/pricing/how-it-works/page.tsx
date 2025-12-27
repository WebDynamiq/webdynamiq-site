import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "How Pricing Works",
  description: "Understand our transparent pricing model. We offer flexible web development solutions adapted to your specific needs and budget.",
};

export default function HowPricingWorksPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Fair, Transparent, and <span className="text-primary">Flexible</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe professional web development should be accessible. 
            Our pricing model is designed to be clear, honest, and adaptable to your business reality.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Pricing Philosophy</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  At Webdynamiq, we don't believe in "one size fits all." Every business is unique, and so are your digital needs. 
                  Whether you are a local startup needing a simple landing page or an established company looking for a complex web application, 
                  we approach pricing with the same goal: <strong>delivering maximum value for your budget.</strong>
                </p>
                <p>
                  We operate with a lean structure, which means you pay for expert development and personal service—not for expensive office overhead or account managers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Steps */}
      <section className="py-20 bg-background border-y">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">How We Determine Your Price</h2>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Initial Consultation</h3>
                <p className="text-muted-foreground">
                  We start with a conversation. We listen to your ideas, understand your business goals, and discuss your available budget openly. 
                  This isn't a sales pitch; it's a discovery session to see if we're a good fit.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Scope & Proposal</h3>
                <p className="text-muted-foreground">
                  Based on our chat, we define the scope of work. We'll outline exactly what features you need and what you don't. 
                  We provide a clear, itemized proposal so you know exactly where your money is going.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flexibility & Adjustments</h3>
                <p className="text-muted-foreground">
                  Our starting prices are just that—a starting point. If the proposal exceeds your budget, we don't just walk away. 
                  We look for solutions. Can we phase the project? Can we simplify a feature? We work with you to find the sweet spot.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Agreement & Launch</h3>
                <p className="text-muted-foreground">
                  Once we agree on the scope and price, we get to work. No surprise bills, no hidden costs. 
                  We keep you updated throughout the development process until your site is ready to launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance / FAQ style section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Is my budget too small?</h3>
                <p className="text-muted-foreground">
                  Likely not. We love working with small businesses and startups. If you have a limited budget, be honest with us. 
                  We can often recommend a streamlined solution or a phased approach that gets you online professionally without overspending.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-none shadow-sm">
              <CardContent className="pt-6">
                <h3 className="text-lg font-bold mb-3">Do you charge hourly or per project?</h3>
                <p className="text-muted-foreground">
                  For most websites and applications, we prefer <strong>project-based pricing</strong>. This gives you certainty and peace of mind. 
                  For ongoing maintenance or small updates later on, we can discuss hourly rates or support packages.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's discuss your project</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to see what we can do for you? Request a free, no-obligation quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Get a Personal Quote</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">View Pricing Tiers</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
