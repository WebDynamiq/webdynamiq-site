import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";

export default function ThankYouPage() {
  return (
    <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden bg-background p-6 text-center">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-100 w-100 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-md space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
        {/* Visual Anchor */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/10 bg-primary/5 text-primary shadow-sm">
          <Check className="h-6 w-6" strokeWidth={2} />
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">
            Bedankt voor je bericht!
          </h1>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Je hoort binnenkort persoonlijk van mij. <br className="hidden sm:block" />
Geen automatische antwoorden, gewoon even contact.
          </p>
        </div>

        <div className="pt-2">
          <Link 
            href="/" 
            className="group inline-flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Terug naar home
          </Link>
        </div>
      </div>
    </div>
  );
}
