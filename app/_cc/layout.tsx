import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "CC",
};

export default function CcLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
