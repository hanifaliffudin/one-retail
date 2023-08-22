import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import NavbarWithCTAButton from "./components/Navbar";
import FooterWithSocialMediaIcons from "./components/Footer";

const instrument_sans = Instrument_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "One Retail",
  description: "Transform Your Business with Advanced Retail Technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={instrument_sans.className}>
        <button className="fixed z-20 sm:right-10 sm:bottom-14 right-2 bottom-2">
          <img src="/WhatsApp.svg" alt="wa" />
        </button>
        <NavbarWithCTAButton />
        {children}
        <FooterWithSocialMediaIcons />
      </body>
    </html>
  );
}
