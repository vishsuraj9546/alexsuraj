import type { Metadata } from "next";
import { Space_Grotesk, Montserrat, Roboto, Open_Sans } from "next/font/google";
import "./globals.css";
import { AnimationWrapper } from "@/app/components/AnimationWrapper";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  /** ✅ Yeh line add ki gayi (SEO warning fix ke liye) */
  metadataBase: new URL("https://yourportfolio.com"), // 🔄 yahan apna live domain daalna after deployment

  title: "Suraj Kumar - AI/ML Engineer",
  description: "Portfolio of Suraj Kumar - AI/ML Engineer",
  openGraph: {
    title: "Suraj Kumar - AI/ML Engineer",
    description: "Professional portfolio showcasing AI/ML projects and skills",
    url: "https://yourportfolio.com",
    siteName: "Suraj's Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar - AI/ML Engineer",
    description: "Professional portfolio showcasing AI/ML projects and skills",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${montserrat.variable} ${roboto.variable} ${openSans.variable} antialiased bg-black text-white`}
      >
        <AnimationWrapper>{children}</AnimationWrapper>
      </body>
    </html>
  );
}
