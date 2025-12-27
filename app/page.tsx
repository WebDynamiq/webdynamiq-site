import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <Badge variant="secondary" className="mb-6">
            Webdynamiq Agency
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            A premium web partner that <br className="hidden md:block" />
            <span className="text-primary">adapts to your budget</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            We build professional websites and digital solutions for small businesses and startups. 
            No enterprise pricing, just honest quality and long-term partnership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">Start Your Project</Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">View Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From simple landing pages to complex web applications, we deliver solutions that help your business grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Business Websites</CardTitle>
                <CardDescription>Professional presence for your brand</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Fast, SEO-optimized websites that convert visitors into customers. Perfect for local businesses and service providers.
                </p>
                <Link href="/services" className="text-primary font-medium hover:underline">Learn more &rarr;</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Custom Applications</CardTitle>
                <CardDescription>Tailored tools for your needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Web apps, dashboards, and internal tools built to streamline your operations and solve specific problems.
                </p>
                <Link href="/services" className="text-primary font-medium hover:underline">Learn more &rarr;</Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>E-commerce</CardTitle>
                <CardDescription>Sell your products online</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Scalable online stores with secure payments and easy inventory management. Start selling to the world.
                </p>
                <Link href="/services" className="text-primary font-medium hover:underline">Learn more &rarr;</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Choose Webdynamiq?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Pricing</h3>
                    <p className="text-muted-foreground">We adapt our solutions to fit your budget, not the other way around.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Human-First Approach</h3>
                    <p className="text-muted-foreground">We listen, understand, and communicate clearly. No technical jargon.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Long-Term Partnership</h3>
                    <p className="text-muted-foreground">We don't just build and leave. We're here to support your growth.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background p-8 rounded-2xl border shadow-sm">
              <h3 className="text-xl font-bold mb-4">Ready to get started?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your project and find the best solution for your needs.
              </p>
              <Link href="/contact">
                <Button className="w-full">Schedule a Free Consultation</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
