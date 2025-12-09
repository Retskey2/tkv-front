import type { Metadata } from "next";

import Script from "next/script";

import TelegramProviderNoSSR from "../providers/TelegramProvider/TelegramProviderNoSSR";
import { Anonymous_Pro } from "next/font/google";

// import "tw-animate-css/dist/tw-animate.css";
import "./globals.scss";

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-anonymous-pro",
});

export const metadata: Metadata = {
  title: "Telegram Mini App for Ton",
  description: "Any description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://telegram.org/js/telegram-web-app.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${anonymousPro.variable} antialiased`}>
        <TelegramProviderNoSSR>{children}</TelegramProviderNoSSR>
      </body>
    </html>
  );
}
