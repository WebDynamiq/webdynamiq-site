import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "@/components/ConvexClientProvider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import StructuredData from "@/components/structured-data";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.webdynamiq.com"),
  title: {
    default: "Webdynamiq | Professionele Weboplossingen",
    template: "%s | Webdynamiq"
  },
  description: "Professioneel webdesignbureau voor kleine en grote bedrijven en startups. Premium websites die passen bij uw budget.",
  openGraph: {
    type: "website",
    locale: "nl_BE",
    url: "https://www.webdynamiq.com",
    siteName: "Webdynamiq",
    title: "Webdynamiq | Professionele Weboplossingen",
    description: "Professioneel webdesignbureau voor kleine en grote bedrijven en startups. Premium websites die passen bij uw budget.",
    images: [
      {
        url: "/images/logo-brand-name.png",
        width: 1200,
        height: 630,
        alt: "Webdynamiq",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdynamiq | Professionele Weboplossingen",
    description: "Professioneel webdesignbureau voor kleine en grote bedrijven en startups. Premium websites die passen bij uw budget.",
    images: ["/images/logo-brand-name.png"],
  },
  alternates: {
    canonical: "./",
  },
  icons: {
    icon: [
      { url: '/favicon/favicon.ico' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicon/apple-touch-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={inter.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <StructuredData />
        <ConvexClientProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
