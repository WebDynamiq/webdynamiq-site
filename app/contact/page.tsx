import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Webdynamiq. Discuss your web project, request a quote, or ask a question.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">We'd love to hear from you</h2>
              <p className="text-muted-foreground mb-8 text-lg">
                Whether you're ready to start a project or just have a few questions, we're here to help. No pressure, no sales pitch.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground">hello@webdynamiq.com</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">Belgium / EU (Remote)</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">What happens next?</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2">
                    <li>We'll review your message within 24 hours.</li>
                    <li>We'll schedule a short call to understand your needs.</li>
                    <li>We'll provide a tailored proposal and quote.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Project inquiry" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project, budget, and timeline..." 
                      className="min-h-[150px]"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
