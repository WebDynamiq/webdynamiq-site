import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Transparent pricing for professional web development. Flexible packages starting from affordable rates.",
};

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Transparent Pricing</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional quality without the enterprise price tag. We adapt our solutions to fit your budget.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Starter</CardTitle>
                <CardDescription>Ideal for local businesses and startups</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€950</span>
                  <span className="text-muted-foreground"> / starting from</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Professional, credible online presence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Fully responsive for all devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Foundational SEO setup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Easy way for clients to contact you</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Growth */}
            <Card className="flex flex-col border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Most Popular
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Growth</CardTitle>
                <CardDescription>For expanding companies</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€1,795</span>
                  <span className="text-muted-foreground"> / starting from</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Expanded structure (up to 10 pages)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">CMS to manage your own content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Performance & speed optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Analytics to track visitor growth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Blog or news integration</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Custom */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Advanced</CardTitle>
                <CardDescription>Complex requirements</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-muted-foreground"> / quote based</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Custom web applications & tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">E-commerce & payment systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">User portals & dashboards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Third-party API integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Dedicated support agreements</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Contact Us</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-16 text-center max-w-2xl mx-auto space-y-6">
            <div>
              <p className="text-base font-medium text-foreground mb-2">
                All prices are indicative. Every project is different, and we always look for a solution that fits both your needs and your budget.
              </p>
              <p className="text-sm text-muted-foreground">
                We believe in transparency. Before we start, we define the scope together so you know exactly what you're paying for.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium pt-4">
              <Link href="/pricing/how-it-works" className="text-primary hover:underline flex items-center gap-1">
                Want to know more about how our pricing works? Read more &rarr;
              </Link>
              <Link href="/maintenance" className="text-primary hover:underline flex items-center gap-1">
                Looking for ongoing support? See our maintenance plans &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
