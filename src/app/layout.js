import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../app/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SoftSell | Sell Your Unused Software Licenses",
  description:
    "Get cash for your unused software licenses quickly and securely.",
  keywords: [
    "software resale",
    "sell licenses",
    "unused software",
    "license marketplace",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/icon.ico" />
      </head>
      <body className={`font-js`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
