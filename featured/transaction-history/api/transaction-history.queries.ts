import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getTransactionHistory } from "./transaction-history.api";

export function useTransactionHistory(): UseQueryResult<
  TransferFunction | undefined,
  Error
> {
  return useQuery({
    queryKey: ["fund-stats"],
    queryFn: () => {
      return getTransactionHistory().then((res) => res.data);
    },
  });
}
