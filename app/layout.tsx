import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import AnimationInitializer from "@/components/ui/AnimationInitializer";
import { ToastProvider } from "@/components/ui/Toast";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage-grotesque",
});

export const metadata: Metadata = {
  title: "AdMyBrand - Transform Your Advertising with AI",
  description: "AI-powered advertising platform that creates, optimizes, and manages your campaigns across all platforms for better results with less effort.",
  keywords: "AI advertising, digital marketing, campaign optimization, ad automation, marketing platform",
  authors: [{ name: "AdMyBrand Team" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolageGrotesque.variable} antialiased`}>
        <ToastProvider>
          <AnimationInitializer />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
