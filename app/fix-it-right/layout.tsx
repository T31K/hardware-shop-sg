import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fix It Right | Hardware Store · Tampines Singapore",
  description:
    "Fix It Right — your hardware store with value prices. Tools, lighting, door hardware, locks & more. Physical store at Tampines Street 22. Also shop online on Lazada.",
  openGraph: {
    title: "Fix It Right | Hardware Store · Tampines Singapore",
    description:
      "Fix It Right — your hardware store with value prices. Tools, lighting, door hardware, locks & more. Physical store at Tampines Street 22. Also shop online on Lazada.",
    url: "https://hardware-shop-sg.vercel.app/fix-it-right",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix It Right | Hardware Store · Tampines Singapore",
    description:
      "Fix It Right — your hardware store with value prices. Tools, lighting, door hardware, locks & more. Physical store at Tampines Street 22. Also shop online on Lazada.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
