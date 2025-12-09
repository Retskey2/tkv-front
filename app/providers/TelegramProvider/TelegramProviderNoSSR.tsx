"use client";

import React from "react";
import dynamic from "next/dynamic";

const TelegramProvider = dynamic(() => import("./TelegramProvider"), {
  ssr: false,
  loading: () => null,
});

export default function TelegramProviderNoSSR({
  children,
}: {
  children: React.ReactNode;
}) {
  return <TelegramProvider>{children}</TelegramProvider>;
}
