import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/components";
import TransactionForm from "../components/TransactionForm";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finance Tracker",
  description: "Track your finances",
};

 export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " w-screen h-screen text-white"}>
        <Navbar />
        {children}
        <TransactionForm/>
      </body>
    </html>
  );
}
