"use client";

import { useFundStats } from "@/featured/fund/api/fund.queries";
import { FundStatistic } from "@/shared/ui/FundStatistic/FundStatistic";

export const FundStatisticContainer = () => {
  const { data, isLoading, error } = useFundStats();

  if (isLoading) return <p>Loading...</p>;
  if (error || !data) return <p>Error loading fund statistics</p>;

  return <FundStatistic data={data} />;
};
