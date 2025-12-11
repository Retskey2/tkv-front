'use client';

import { useTransactionHistory } from '@/featured/transaction-history/api/transaction-history.queries';
import { List } from '@/shared/ui';

import styles from './ListTransactionHistoryContainer.module.scss';
export const ListTransactionHistoryContainer = () => {
  const { data, isLoading } = useTransactionHistory();

  if (isLoading) return <p>Loading...</p>;
  // if (error || !data) return <p>Error loading fund statistics</p>;

  return (
    <div className={styles['wrapper-list']}>
      <List data={data} />
    </div>
  );
};
