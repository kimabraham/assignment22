import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import FloatButton from "./components/FloatButton";

export const metadata: Metadata = {
  title: {
    default: "NYT Best Sellers",
    template: "%s | NYT Best Sellers",
  },
  description: "The Newyork times best seller explorer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="retro">
      <body>
        <Header />
        <main className="max-w-screen-xl mx-auto px-4 md:px-6 pt-20 md:pt-28">
          {children}
        </main>
        <FloatButton />
      </body>
    </html>
  );
}
