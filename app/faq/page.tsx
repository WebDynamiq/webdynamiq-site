import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Answers to common questions about our web development services, pricing, and process.",
};

export default function FAQPage() {
  const faqs = [
    {
      question: "Do you only work with large companies?",
      answer: "Not at all! We specialize in working with small businesses, startups, and local companies. We believe professional web development should be accessible to businesses of all sizes."
    },
    {
      question: "What if my budget is limited?",
      answer: "We pride ourselves on flexibility. If you have a specific budget, let us know. We can often tailor the scope of the project or suggest alternative solutions to meet your financial requirements without compromising on quality."
    },
    {
      question: "Can pricing be adjusted?",
      answer: "Yes. Our pricing packages are starting points. We provide custom quotes based on your specific needs. If you don't need certain features, you shouldn't pay for them."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Absolutely. We offer various support and maintenance packages to ensure your website stays secure, updated, and running smoothly after launch. We're in it for the long haul."
    },
    {
      question: "How long does a project take?",
      answer: "Timeline depends on the complexity of the project. A simple business website can be ready in 2-4 weeks, while custom applications or e-commerce stores may take 6-12 weeks. We'll provide a clear timeline in our proposal."
    },
    {
      question: "Do you build scalable solutions?",
      answer: "Yes. We build with growth in mind. Whether you start small and want to add features later, or need a system that can handle thousands of users, we use technologies (like Next.js) that scale with your business."
    },
    {
      question: "Will I be able to update the website myself?",
      answer: "Yes! We typically build websites with a Content Management System (CMS) or user-friendly interface that allows you to easily update text, images, and blog posts without needing to write code."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-8 mx-auto max-w-7xl text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't see what you're looking for, feel free to reach out.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-8 mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center bg-primary/5 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              We're happy to chat and clarify anything that's on your mind.
            </p>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
