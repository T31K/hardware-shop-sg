import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RY Hardware & Contractor | Bedok · Open Till 10:30PM Daily",
  description:
    "RY Hardware at Bedok North Street 2. Hardware store and contractor services — electrical, lighting, water heater and more. Open 8AM–10:30PM every day of the week.",
  openGraph: {
    title: "RY Hardware & Contractor | Bedok · Open Till 10:30PM Daily",
    description:
      "RY Hardware at Bedok North Street 2. Hardware store and contractor services — electrical, lighting, water heater and more. Open 8AM–10:30PM every day of the week.",
    url: "https://hardware-shop-sg.vercel.app/ry-hardware",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RY Hardware & Contractor | Bedok · Open Till 10:30PM Daily",
    description:
      "RY Hardware at Bedok North Street 2. Hardware store and contractor services — electrical, lighting, water heater and more. Open 8AM–10:30PM every day of the week.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
