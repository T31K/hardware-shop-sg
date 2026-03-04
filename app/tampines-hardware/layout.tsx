import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tampines Hardware | Hardware Shop Singapore",
  description:
    "Your local hardware shop at 10 Chai Chee Road, Singapore. Tools, building materials, and home essentials.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
