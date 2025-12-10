"use client";

import { ReactNode } from "react";
import {
  QueryProvider,
  TelegramProvider,
  ToastProvider,
} from "@/app/providers";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryProvider>
      <TelegramProvider>
        {children}
        <ToastProvider />
      </TelegramProvider>
    </QueryProvider>
  );
}
