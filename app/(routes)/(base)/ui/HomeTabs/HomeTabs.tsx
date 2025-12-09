"use client";

import TabCarousel from "@/shared/ui/TabCarousel/TabCarousel";

export const HomeTabs = () => {
  return (
    <div>
      <TabCarousel
        tabs={["Holders leaderboard", "Latest transfers", "TOP users"]}
        onChange={(index) => console.log("Selected:", index)}
      />
    </div>
  );
};
