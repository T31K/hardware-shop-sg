import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tampines Hardware | Hardware Shop Singapore",
  description:
    "Your local hardware shop at 10 Chai Chee Road, Singapore. Tools, building materials, and home essentials.",
  openGraph: {
    title: "Tampines Hardware | Hardware Shop Singapore",
    description:
      "Your local hardware shop at 10 Chai Chee Road, Singapore. Tools, building materials, and home essentials.",
    url: "https://hardware-shop-sg.vercel.app/tampines-hardware",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tampines Hardware | Hardware Shop Singapore",
    description:
      "Your local hardware shop at 10 Chai Chee Road, Singapore. Tools, building materials, and home essentials.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
