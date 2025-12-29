import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8 mx-auto max-w-7xl">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold text-xl tracking-tight">
            Webdynamiq
          </Link>
        </div>
        
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

        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button>Neem contact op</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
