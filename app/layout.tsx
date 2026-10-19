import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Providers } from "@/components/Providers";
import { site } from "@/lib/site";
import "./globals.css";

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Kitchen Set & Furniture Custom`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "kitchen set Tanah Grogot",
    "kitchen set Paser",
    "furniture custom Tanah Grogot",
    "lemari pakaian custom Paser",
    "backdrop TV Tanah Grogot",
    "interior Kalimantan Timur",
  ],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Kitchen Set & Furniture Custom`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Kitchen Set & Furniture Custom`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1a120d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: `+${site.whatsapp.number}`,
  sameAs: [site.instagram.url, site.facebook.url],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    addressCountry: "ID",
  },
  openingHours: "Mo-Sa 08:00-17:00",
  areaServed: [site.address.city, site.address.regency],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
