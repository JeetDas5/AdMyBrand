import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import AnimationInitializer from "@/components/ui/AnimationInitializer";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "AdMyBrand",
  description: "AI powered ad platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} antialiased`}>
        <AnimationInitializer />
        {children}
      </body>
    </html>
  );
}
