import { Geist, Geist_Mono } from "next/font/google"; // Updated for 2026
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="font-sans antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}