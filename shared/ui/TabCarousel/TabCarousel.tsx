"use client";

import styles from "./TabCarousel.module.scss";
import { useRef, useState } from "react";
import { Tab } from "../Tab/Tab";

type TabCarouselProps = {
  tabs: string[];
  onChange?: (index: number) => void;
};

export default function TabCarousel({ tabs, onChange }: TabCarouselProps) {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const handleSelect = (index: number) => {
    setActive(index);
    onChange?.(index);

    const container = ref.current;
    const tab = container?.children[index] as HTMLElement;

    if (container && tab) {
      container.scrollTo({
        left: tab.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={ref} className={styles["container-tabs-carousel"]}>
      {tabs.map((item, i) => (
        <Tab key={i} onClick={() => handleSelect(i)} active={active === i}>
          {item}
        </Tab>
      ))}
    </div>
  );
}
