import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { FundStatsResponse } from "../types/types";

import { getFundStats } from "./fund.api";

export function useFundStats(): UseQueryResult<
  FundStatsResponse | undefined,
  Error
> {
  return useQuery({
    queryKey: ["fund-stats"],
    queryFn: () => {
      return getFundStats().then((res) => res.data);
    },
  });
}
