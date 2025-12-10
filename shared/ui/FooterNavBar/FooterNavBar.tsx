"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./FooterNavBar.module.scss";

import { NAV_ITEMS } from "@/shared/constants/constants.navigation";

export const FooterNavBar = () => {
  const pathname = usePathname();

  return (
    <footer className={styles["footer-container"]}>
      <nav>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles["nav-item"]} ${
                isActive ? styles["nav-item-active"] : ""
              }`}
            >
              <Icon className={`${styles["nav-icon"]}`} />
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};
