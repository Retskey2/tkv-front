"use client";

import { usePathname } from "next/navigation";

import styles from "./FooterNavBar.module.scss";

import { NAV_ITEMS } from "@/shared/constants/constants.navigation";
import { FooterNavBarItem } from "./FooterNavBarItem/FooterNavBarItem";

export const FooterNavBar = () => {
  const pathname = usePathname();

  return (
    <footer className={styles["footer-container"]}>
      <nav>
        {NAV_ITEMS.map((item) => (
          <FooterNavBarItem
            key={item.href}
            href={item.href}
            icon={item.icon}
            isActive={pathname === item.href}
          />
        ))}
      </nav>
    </footer>
  );
};
