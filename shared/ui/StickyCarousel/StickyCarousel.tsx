'use client';

import { useState } from 'react';

import TabCarousel from '@/shared/ui/TabCarousel/TabCarousel';
import styles from './StickyCarousel.module.scss';
import { useSticky } from './useSticky';

export const StickyCarousel = () => {
  const [tabRef, isSticky] = useSticky();
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index: number) => {
    setSelectedTab(index);

    console.log('Selected:', selectedTab);
  };

  return (
    <div className={styles['container']}>
      <div ref={tabRef} />

      <div className={`${styles['wrapper-sticky']} ${isSticky && styles['active']}`}>
        <TabCarousel
          tabs={['Holders leaderboard', 'Latest transfers', 'TOP users']}
          onChange={handleTabChange}
        />
      </div>
    </div>
  );
};
