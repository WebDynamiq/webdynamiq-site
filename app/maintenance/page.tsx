import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance & Support",
  description: "Keep your website secure and up-to-date with our flexible maintenance plans. Professional support for peace of mind.",
};

export default function MaintenancePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Peace of Mind for Your Website</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your website is an investment. Protect it with our reliable maintenance and support packages.
            We handle the technical details so you can focus on your business.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Basic */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Basic</CardTitle>
                <CardDescription>Essential security & stability</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€75</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Regular security updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Daily backups & monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Uptime monitoring (99.9%)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Technical bug fixes</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full" variant="outline">Choose Basic</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Growth */}
            <Card className="flex flex-col border-primary relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Recommended
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Growth</CardTitle>
                <CardDescription>Active management & updates</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">€195</span>
                  <span className="text-muted-foreground"> / month</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Everything in Basic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">2 hours of content updates/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Monthly performance report</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Priority email support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">SEO health checks</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link href="/contact" className="w-full">
                  <Button className="w-full">Choose Growth</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Custom */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">Custom</CardTitle>
                <CardDescription>For complex applications</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold">Custom</span>
                  <span className="text-muted-foreground"> / quote based</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Full application support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Custom feature development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Dedicated server management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Emergency response SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">Consulting & strategy</span>
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

          <div className="mt-16 text-center max-w-2xl mx-auto">
            <p className="text-base font-medium text-foreground mb-2">
              Flexible Terms
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              These packages are indicative. We can tailor a support plan that fits your specific needs and budget. 
              You are never locked into services you don't need.
            </p>
            <Link href="/contact">
              <Button size="lg">Discuss Support Options</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
