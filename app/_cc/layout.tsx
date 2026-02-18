import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "b@c",
};

export default function CcLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
