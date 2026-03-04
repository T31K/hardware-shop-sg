import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chin Tat Hardware | Tampines · Rated 5.0 on Google",
  description:
    "Chin Tat Hardware Pte Ltd — wide range of hardware for indoor, outdoor, personal and industrial use. Friendly boss, quality products, great prices. Tampines Street 93.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
