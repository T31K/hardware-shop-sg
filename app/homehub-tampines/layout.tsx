import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Hub Store | Hardware & Handyman · Tampines",
  description:
    "Home Hub Store at Tampines Ave 8. Hardware, plumbing, tools and in-house handyman service. Open 7 days, 9:30 AM – 9:30 PM.",
  openGraph: {
    title: "Home Hub Store | Hardware & Handyman · Tampines",
    description:
      "Home Hub Store at Tampines Ave 8. Hardware, plumbing, tools and in-house handyman service. Open 7 days, 9:30 AM – 9:30 PM.",
    url: "https://hardware-shop-sg.vercel.app/homehub-tampines",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Hub Store | Hardware & Handyman · Tampines",
    description:
      "Home Hub Store at Tampines Ave 8. Hardware, plumbing, tools and in-house handyman service. Open 7 days, 9:30 AM – 9:30 PM.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
