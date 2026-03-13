import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/../components/Navbar";
import Footer from "@/../components/Footer";
import { ThemeProvider } from "@/../components/ThemeProvider";
import { LanguageProvider } from "@/../components/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mohammed Imran — Full Stack & Platform Engineer",
  description: "Portfolio of Mohammed Imran, Full Stack Developer & Platform Engineer specializing in React, Node.js, Next.js, and Enterprise LCNC Platforms. Open to roles in UAE, KSA, Qatar.",
  keywords: ["React Developer UAE", "Node.js Engineer Dubai", "Full Stack Developer KSA", "Next.js", "Platform Engineering"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <Navbar />
            <main className="pt-16">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
