import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chin Tat Hardware | Tampines · Rated 5.0 on Google",
  description:
    "Chin Tat Hardware Pte Ltd — wide range of hardware for indoor, outdoor, personal and industrial use. Friendly boss, quality products, great prices. Tampines Street 93.",
  openGraph: {
    title: "Chin Tat Hardware | Tampines · Rated 5.0 on Google",
    description:
      "Chin Tat Hardware Pte Ltd — wide range of hardware for indoor, outdoor, personal and industrial use. Friendly boss, quality products, great prices. Tampines Street 93.",
    url: "https://hardware-shop-sg.vercel.app/chin-tat-hardware",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chin Tat Hardware | Tampines · Rated 5.0 on Google",
    description:
      "Chin Tat Hardware Pte Ltd — wide range of hardware for indoor, outdoor, personal and industrial use. Friendly boss, quality products, great prices. Tampines Street 93.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
