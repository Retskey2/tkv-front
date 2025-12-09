import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import TelegramProviderNoSSR from "../providers/TelegramProvider/TelegramProviderNoSSR";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
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
      <body className={`${nunito.variable} antialiased`}>
        <TelegramProviderNoSSR>{children}</TelegramProviderNoSSR>
      </body>
    </html>
  );
}
