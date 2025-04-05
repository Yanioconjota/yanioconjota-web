import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Yanio Conjota",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${roboto.className} antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
