import { User } from "@/featured/user/model/types";

export enum CurrencyList {
  TON = "TON",
}

export interface TransactionHistory {
  id: string;
  userId: string;
  amount: number;
  currency: CurrencyList;
  metadata: string;
  user?: User;
}
