import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Services",
  description: "Professional web development services including business websites, custom applications, e-commerce, and ongoing support.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web solutions tailored to your business needs. From simple sites to complex applications.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl space-y-24">
          
          {/* Business Websites */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Web Development</Badge>
              <h2 className="text-3xl font-bold mb-4">Business Websites</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Your website is your digital storefront. We build professional, fast, and SEO-optimized websites that help you stand out and attract more customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>SEO-friendly structure</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Easy content management</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button>Get a Quote</Button>
              </Link>
            </div>
            <div className="bg-muted rounded-xl h-80 flex items-center justify-center border">
              <span className="text-muted-foreground">Website Illustration</span>
            </div>
          </div>

          {/* Custom Applications */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
            <div className="order-last md:order-first bg-muted rounded-xl h-80 flex items-center justify-center border">
              <span className="text-muted-foreground">App Illustration</span>
            </div>
            <div>
              <Badge className="mb-4">Custom Software</Badge>
              <h2 className="text-3xl font-bold mb-4">Custom Web Applications</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Need more than just a website? We build custom web applications, dashboards, and internal tools to streamline your business processes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>User authentication & management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Database integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Real-time data & dashboards</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button>Discuss Your Idea</Button>
              </Link>
            </div>
          </div>

          {/* E-commerce */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">E-commerce</Badge>
              <h2 className="text-3xl font-bold mb-4">Webshops & E-commerce</h2>
              <p className="text-muted-foreground mb-6 text-lg">
                Start selling online with a robust e-commerce platform. We build scalable online stores that provide a seamless shopping experience for your customers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Secure payment integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Inventory management</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  <span>Order tracking & notifications</span>
                </li>
              </ul>
              <Link href="/contact">
                <Button>Start Selling</Button>
              </Link>
            </div>
            <div className="bg-muted rounded-xl h-80 flex items-center justify-center border">
              <span className="text-muted-foreground">E-commerce Illustration</span>
            </div>
          </div>

          {/* Support */}
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Ongoing Support & Maintenance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We don't just launch and leave. We offer ongoing support packages to keep your website secure, updated, and running smoothly.
            </p>
            <Link href="/contact">
              <Button variant="outline">Ask About Support</Button>
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
