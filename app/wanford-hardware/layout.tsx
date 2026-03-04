import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wanford Hardware & Trading DIY | Chai Chee · Keys & More",
  description:
    "Wanford Hardware & Trading DIY at Chai Chee Road. Hardware, tools, key cutting and locksmith services. Knowledgeable boss happy to help with your DIY projects. Mon–Fri 10AM–7PM, Sat–Sun 11AM–5PM.",
  openGraph: {
    title: "Wanford Hardware & Trading DIY | Chai Chee · Keys & More",
    description:
      "Wanford Hardware & Trading DIY at Chai Chee Road. Hardware, tools, key cutting and locksmith services. Knowledgeable boss happy to help with your DIY projects. Mon–Fri 10AM–7PM, Sat–Sun 11AM–5PM.",
    url: "https://hardware-shop-sg.vercel.app/wanford-hardware",
    images: [{ url: "https://hardware-shop-sg.vercel.app/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wanford Hardware & Trading DIY | Chai Chee · Keys & More",
    description:
      "Wanford Hardware & Trading DIY at Chai Chee Road. Hardware, tools, key cutting and locksmith services. Knowledgeable boss happy to help with your DIY projects. Mon–Fri 10AM–7PM, Sat–Sun 11AM–5PM.",
    images: ["https://hardware-shop-sg.vercel.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
