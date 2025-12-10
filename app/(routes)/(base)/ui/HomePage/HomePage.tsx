import { FundStatisticContainer } from '@/widgets/FundStatisticContainer/FundStatisticContainer';
import { StickyCarousel } from '../../../../../shared/ui/StickyCarousel/StickyCarousel';

import styles from './HomePage.module.scss';
import { Description } from '@/shared/ui/Description/Description';
import { ProfileHeaderContainer } from '@/widgets/ProfileHeaderContainer/ProfileHeaderContainer';

export default function HomePage() {
  return (
    <div className={styles['container']}>
      <ProfileHeaderContainer />
      <Description text="Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3." />
      <FundStatisticContainer />
      <StickyCarousel />
    </div>
  );
}
