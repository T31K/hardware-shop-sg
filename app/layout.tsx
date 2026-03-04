import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Chin Hoe Hup Kee Hardware | Tampines Hardware Shop",
  description:
    "Your trusted neighbourhood hardware shop in Tampines, Singapore. Paint, hardware, sealant, coatings, and more since serving the Tampines HDB community.",
  openGraph: {
    title: "Chin Hoe Hup Kee Hardware | Tampines Hardware Shop",
    description:
      "Your trusted neighbourhood hardware shop in Tampines, Singapore. Paint, hardware, sealant, coatings, and more since serving the Tampines HDB community.",
    url: "https://hardware-shop-sg.vercel.app",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chin Hoe Hup Kee Hardware | Tampines Hardware Shop",
    description:
      "Your trusted neighbourhood hardware shop in Tampines, Singapore. Paint, hardware, sealant, coatings, and more since serving the Tampines HDB community.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
