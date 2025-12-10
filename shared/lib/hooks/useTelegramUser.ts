"use client";

import { useState, useEffect, useMemo } from "react";
import {
  retrieveLaunchParams,
  ThemeParams,
  type LaunchParams,
} from "@telegram-apps/sdk";
import { themeParamsState, useSignal } from "@telegram-apps/sdk-react";

import { UserData } from "../types/user";
import { toHex } from "../utils/converter";

export function useTelegramUser(): {
  userData: UserData | null;
  theme: ThemeParams | null;
} {
  const [launch, setLaunch] = useState<LaunchParams | null>(null);
  const palette = useSignal(themeParamsState);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mounted = true;

    const fetchLaunchParams = async () => {
      try {
        const params = retrieveLaunchParams();
        if (mounted) setLaunch(params ?? null);
      } catch (e: unknown) {
        console.error("Telegram launch params error:", e);
        if (mounted) setLaunch(null);
      }
    };

    fetchLaunchParams();

    return () => {
      mounted = false;
    };
  }, []);

  // Вычисляем тему на основе сигнала и мемоизируем результат
  const theme = useMemo<ThemeParams | null>(() => {
    if (!palette) return null;
    return {
      bg_color: toHex(palette.backgroundColor),
      text_color: toHex(palette.textColor),
      hint_color: toHex(palette.hintColor),
      button_color: toHex(palette.buttonColor),
      button_text_color: toHex(palette.buttonTextColor),
      accent_text_color: toHex(palette.accentTextColor),
      destructive_text_color: toHex(palette.destructiveTextColor),
      header_bg_color: toHex(palette.headerBackgroundColor),
      link_color: toHex(palette.linkColor),
      section_bg_color: toHex(palette.sectionBackgroundColor),
      secondary_bg_color: toHex(palette.secondaryBackgroundColor),
      section_header_text_color: toHex(palette.sectionHeaderTextColor),
      subtitle_text_color: toHex(palette.subtitleTextColor),
    };
  }, [palette]);

  return {
    userData: (launch?.tgWebAppData?.user ?? null) as UserData | null,
    theme,
  };
}
