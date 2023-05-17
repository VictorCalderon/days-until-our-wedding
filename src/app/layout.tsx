import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Budubuduri Boda",
  description: "Página para recordar lo dichoso de soy y te amo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wedding.vcbio.tech",
    title: "La Budubuduri Boda",
    description: "Nos casamoooosss",
    siteName: "Laura & Víctor",
  },
  twitter: {
    card: "summary_large_image",
    title: "La Budubuduri Boda",
    description: "Nos casamoooosss",
    images: [`https://wedding.vcbio.tech/og.jpg`],
    creator: "@victocalderon",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
