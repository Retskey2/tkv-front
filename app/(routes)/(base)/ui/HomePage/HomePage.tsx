import { FundStatisticContainer } from '@/widgets/FundStatisticContainer/FundStatisticContainer';
import { StickyCarousel } from '@/shared/ui/StickyCarousel/StickyCarousel';

import styles from './HomePage.module.scss';
import { Description } from '@/shared/ui/Description/Description';
import { ProfileHeaderContainer } from '@/widgets/ProfileHeaderContainer/ProfileHeaderContainer';
import { ListTransactionHistoryContainer } from '@/widgets/ListTransactionHistoryContainer/ListTransactionHistoryContainer';

export default function HomePage() {
  return (
    <div className={styles['container-page']}>
      <ProfileHeaderContainer />
      <Description text="Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3." />
      <FundStatisticContainer />
      <StickyCarousel />
      <ListTransactionHistoryContainer />
    </div>
  );
}
