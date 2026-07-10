import type { Metadata } from "next";
import { Playfair_Display, Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SmoothScroll from "@/components/SmoothScroll";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
    title: "Sri Gowri Ganesha Geleyara Balaga | 14 Years of Legacy",
  description:
    "Celebrating 14 years of devotion, unity, and grand Ganesha festivities. Join us for 5 days of events, games, food, donations, aartis, and more.",
  keywords: [
    "Ganesha",
    "Ganesh Chaturthi",
    "Sri Gowri Ganesha Geleyara Balaga",
    "Festival",
    "Bengaluru",
    "Tradition",
    "Culture",
  ],
  openGraph: {
  title: "Sri Gowri Ganesha Geleyara Balaga | 14 Years of Legacy",
    description:
      "Celebrating 14 years of devotion, unity, and grand Ganesha festivities.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfair.variable, inter.variable, "font-sans", geist.variable)}>
      <body className="antialiased">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
