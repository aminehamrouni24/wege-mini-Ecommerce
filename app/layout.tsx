import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { CartProvider } from "@/contexts/CartContext";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AminShop - Modern E-Commerce",
  description: "A modern e-commerce application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <CartProvider>
            <Header />
            <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
              {children}
            </main>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
