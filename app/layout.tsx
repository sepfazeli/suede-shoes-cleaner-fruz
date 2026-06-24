import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suede Shoes Cleaner",
  description: "Professional suede shoe cleaning service showcasing expertise, process, pricing, and how to book a cleaning appointment or request a quote",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}