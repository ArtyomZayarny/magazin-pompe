import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New Site Presentation — ACQUA SERVICE",
  description:
    "Private presentation of the new ACQUA SERVICE digital storefront for Italian pump equipment.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrezentareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
