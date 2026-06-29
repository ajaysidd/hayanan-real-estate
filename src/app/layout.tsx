
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { SITE } from "@/core/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

metadataBase: new URL("https://www.hayanan.com")
export const metadata: Metadata = {
  metadataBase: new URL("https://hayanan.vercel.app"), // change later if you buy a domain

  title: {
  default: SITE.fullName,
  template: `%s | ${SITE.fullName}`,
},

  description: SITE.description,

  keywords: SITE.keywords,

  authors: [
  {
    name: SITE.name,
  },
],

  openGraph: {
  title: SITE.fullName,

  description: SITE.description,

  url: SITE.url,

  siteName: SITE.fullName,

  images: [
    {
      url: SITE.ogImage,
    },
  ],

  type: "website",

  locale: "en_IN",
},

  twitter: {
    card: "summary_large_image",
    title: "HAYANAN Real Estate",
    description:
      "Premium Real Estate Projects and Properties.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

