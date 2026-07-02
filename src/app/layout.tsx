import type { Metadata } from "next";
import { Outfit } from "next/font/google";
// @ts-ignore: CSS side-effect import without type declarations
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import NextTopLoader from "nextjs-toploader";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "TailAdmin",
    template: "%s | TailAdmin",
  },
  description: "TailAdmin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit.className} antialiased flex flex-col min-h-screen`}
      >
        <NextTopLoader color="#465fff" height={3} zIndex={9999} easing="ease-in-out" speed={200} showSpinner={false} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
