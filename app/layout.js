import { Geist, Geist_Mono, Roboto } from "next/font/google"; // Updated for 2026
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

export const metadata = {
  title: 'Lit on Lake',
  description: 'Rochester hand perfected cannabis.',
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <body className="font-sans antialiased text-slate-900">
        {children}
      </body>
    </html>
  );
}