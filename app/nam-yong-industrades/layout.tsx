import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nam Yong Industrades | Kaki Bukit · Hardware & Building Materials",
  description:
    "Nam Yong Industrades at First East Centre, Kaki Bukit. Hardware, door & window fittings, drawer rails, building materials and industrial supplies. Mon–Fri 8AM–5PM, Sat 8AM–2PM.",
  openGraph: {
    title: "Nam Yong Industrades | Kaki Bukit · Hardware & Building Materials",
    description:
      "Nam Yong Industrades at First East Centre, Kaki Bukit. Hardware, door & window fittings, drawer rails, building materials and industrial supplies. Mon–Fri 8AM–5PM, Sat 8AM–2PM.",
    url: "https://hardware-shop-sg.vercel.app/nam-yong-industrades",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nam Yong Industrades | Kaki Bukit · Hardware & Building Materials",
    description:
      "Nam Yong Industrades at First East Centre, Kaki Bukit. Hardware, door & window fittings, drawer rails, building materials and industrial supplies. Mon–Fri 8AM–5PM, Sat 8AM–2PM.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
