import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yanioconjota",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
