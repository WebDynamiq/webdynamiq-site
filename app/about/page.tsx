import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Webdynamiq is a web development agency focused on helping small businesses grow with professional, affordable digital solutions.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">About Webdynamiq</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We are a digital partner for businesses that value quality, honesty, and flexibility.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At Webdynamiq, we believe that professional web development shouldn't be reserved for large corporations with massive budgets.
                </p>
                <p>
                  We started this agency to bridge the gap between DIY website builders and expensive enterprise agencies. We offer a middle ground: premium quality, custom solutions, and personal service—at a price that makes sense for growing businesses.
                </p>
                <p>
                  We don't just write code; we solve problems. Whether you need to attract more local customers, streamline your booking process, or sell products online, we build the tools to help you succeed.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center border">
              <span className="text-muted-foreground">Team / Office Image Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Transparency</h3>
              <p className="text-muted-foreground">
                No hidden costs, no technical jargon designed to confuse. We explain everything in plain language.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Flexibility</h3>
              <p className="text-muted-foreground">
                We adapt to your needs and budget. We believe in finding solutions, not creating barriers.
              </p>
            </div>
            <div className="bg-background p-8 rounded-xl border">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We take pride in our work. Every line of code and every pixel is crafted with care and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-bold mb-6">Let's work together</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Whether you have a clear vision or just a rough idea, we're here to help you take the next step.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
