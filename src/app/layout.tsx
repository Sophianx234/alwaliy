import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Amiri } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { SmoothScrolling } from "@/components/smooth-scrolling";
import { SplashScreen } from "@/components/splash-screen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Alwaliy Ya'kub | Prominent Quran Reciter at Masjidul Bayaan",
  description: "Experience the profound and soul-soothing Quranic recitations of Alwaliy Ya'kub, the prominent reciter at Masjidul Bayaan. Explore exclusive playlists, enroll in enriching Islamic courses, and connect with a thriving community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${amiri.variable}`}
    >
      <body className="font-sans antialiased bg-brand-primary text-brand-text-light flex flex-col overflow-x-clip ">
        <SplashScreen />
        <Navbar />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
