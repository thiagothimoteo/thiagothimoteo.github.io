import type { Metadata } from "next";
import { IBM_Plex_Serif, Poppins } from "next/font/google";
import "./globals.css";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-family-serif",
  weight: ['400', '600']
})

const poppins = Poppins({
  variable: "--font-family-sans-serif",
  weight: ['400', '600', '800']
})

export const metadata: Metadata = {
  title: "Thiago Thimóteo - About me",
  description: "My playground to play around with different technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${poppins.variable} antialiased`}
      >
        <nav className="font-regular flex items-center gap-x-6 text-xl font-sans justify-end mb-6">
        </nav>
        {children}
      </body>
    </html>
  );
}
