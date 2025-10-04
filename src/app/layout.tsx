import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "@/components/layout-wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Connect Group - Modern Business Ecosystem in UAE",
  description: "Connect Group brings over 9 years of experience delivering efficient business solutions for individuals and companies across the Middle East.",
  keywords: "business setup, UAE business, company formation, visa services, HR solutions, Dubai business, freelance visa, business center, company setup UAE",
  authors: [{ name: "Connect Group" }],
  creator: "Connect Group",
  publisher: "Connect Group",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://connectgroup.co",
    siteName: "Connect Group",
    title: "Connect Group - Modern Business Ecosystem in UAE",
    description: "Connect Group brings over 9 years of experience delivering efficient business solutions for individuals and companies across the Middle East.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Connect Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Connect Group - Modern Business Ecosystem in UAE",
    description: "Connect Group brings over 9 years of experience delivering efficient business solutions for individuals and companies across the Middle East.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}