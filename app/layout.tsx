import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "CC",
    description: "hi im nihal.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body suppressHydrationWarning className={`antialiased ${inter.className}`}>
                {children}
            </body>
        </html>
    );
}
