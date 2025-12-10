"use client";

import { useEffect, useRef, useState } from "react";
import { List } from "@/shared/ui/List/List";
import TabCarousel from "@/shared/ui/TabCarousel/TabCarousel";
import styles from "./StickyCarousel.module.scss";
import { useTransactionHistory } from "@/featured/transaction-history/api/transaction-history.queries";

export const StickyCarousel = () => {
  const { data: dataTransaction } = useTransactionHistory();

  const tabRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    if (tabRef.current) observer.observe(tabRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles["container"]}>
      <div ref={tabRef} />

      <div
        className={`${styles["wrapper-sticky"]} ${
          isSticky && styles["active"]
        }`}
      >
        <TabCarousel
          tabs={["Holders leaderboard", "Latest transfers", "TOP users"]}
          onChange={(index) => console.log("Selected:", index)}
        />
      </div>

      <div className={styles["wrapper-list"]}>
        <List data={dataTransaction} />
      </div>
    </div>
  );
};
