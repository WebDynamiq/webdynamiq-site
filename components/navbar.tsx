"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Webdynamiq
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/services" className="relative hover:text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
            Diensten
          </Link>
          <div className="relative group">
            <Link href="/pricing" className="relative hover:text-foreground transition-colors flex items-center gap-1 after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
              Tarieven
            </Link>
            <div className="absolute left-0 top-full pt-2 invisible opacity-0 translate-y-2 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-out w-48">
              <div className="bg-background border rounded-md shadow-md p-2 flex flex-col gap-2">
                <Link href="/pricing" className="hover:bg-muted px-2 py-1.5 rounded-sm transition-colors">
                  Overzicht
                </Link>
                <Link href="/pricing/how-it-works" className="hover:bg-muted px-2 py-1.5 rounded-sm transition-colors">
                  Hoe het werkt
                </Link>
                <Link href="/maintenance" className="hover:bg-muted px-2 py-1.5 rounded-sm transition-colors">
                  Onderhoud
                </Link>
              </div>
            </div>
          </div>
          <Link href="/process" className="relative hover:text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
            Werkwijze
          </Link>
          <Link href="/about" className="relative hover:text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
            Over mij
          </Link>
          <Link href="/faq" className="relative hover:text-foreground transition-colors after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-out hover:after:origin-bottom-left hover:after:scale-x-100">
            FAQ
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/contact">
            <Button>Neem contact op</Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col gap-0" showCloseButton={false}>
                <SheetHeader className="sr-only">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>
                        Mobile navigation menu
                    </SheetDescription>
                </SheetHeader>
                
                {/* Custom Header */}
                <div className="flex items-center justify-between p-4 border-b">
                  <span className="font-bold text-xl tracking-tight">Webdynamiq</span>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon-sm" className="h-8 w-8">
                      <HugeiconsIcon icon={Cancel01Icon} strokeWidth={2} />
                      <span className="sr-only">Close</span>
                    </Button>
                  </SheetClose>
                </div>

                <div className="flex flex-col h-full overflow-y-auto">
                  <div className="flex-1 py-6 px-6 flex flex-col gap-1">
                    <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-3 border-b border-transparent hover:text-primary transition-colors">
                      Home
                    </Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-3 border-b border-transparent hover:text-primary transition-colors">
                      Diensten
                    </Link>
                    
                    <Accordion type="single" collapsible className="w-full border-none">
                      <AccordionItem value="pricing" className="border-none">
                        <AccordionTrigger className="text-lg font-semibold py-3 hover:no-underline hover:text-primary transition-colors">
                          Tarieven
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-1 pl-4 pb-2">
                            <Link href="/pricing" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground py-2 block text-base transition-colors">
                              Overzicht
                            </Link>
                            <Link href="/pricing/how-it-works" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground py-2 block text-base transition-colors">
                              Hoe het werkt
                            </Link>
                            <Link href="/maintenance" onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground py-2 block text-base transition-colors">
                              Onderhoud
                            </Link>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>

                    <Link href="/process" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-3 border-b border-transparent hover:text-primary transition-colors">
                      Werkwijze
                    </Link>
                    <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-3 border-b border-transparent hover:text-primary transition-colors">
                      Over mij
                    </Link>
                    <Link href="/faq" onClick={() => setIsOpen(false)} className="text-lg font-semibold py-3 border-b border-transparent hover:text-primary transition-colors">
                      FAQ
                    </Link>
                  </div>

                  {/* Footer CTA */}
                  <div className="p-6 mt-auto border-t bg-muted/10">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full text-base py-6 shadow-sm">Neem contact op</Button>
                    </Link>
                  </div>
                </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
