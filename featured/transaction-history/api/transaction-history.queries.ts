import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getTransactionHistory } from './transaction-history.api';
import { TransactionHistory } from '../types/types';

export function useTransactionHistory(): UseQueryResult<TransactionHistory[] | undefined, Error> {
  return useQuery({
    queryKey: ['transaction-history'],
    queryFn: () => {
      return getTransactionHistory().then((res) => res.data);
    },
  });
}
