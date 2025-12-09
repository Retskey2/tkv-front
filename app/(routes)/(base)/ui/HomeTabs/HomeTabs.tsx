"use client";

import { List } from "@/shared/ui/List/List";
import TabCarousel from "@/shared/ui/TabCarousel/TabCarousel";
import styles from "./HomeTabs.module.scss";

export const HomeTabs = () => {
  return (
    <div className={styles["container"]}>
      <TabCarousel
        tabs={["Holders leaderboard", "Latest transfers", "TOP users"]}
        onChange={(index) => console.log("Selected:", index)}
      />
      <div className={styles["wrapper-list"]}>
        <List />
      </div>
    </div>
  );
};
