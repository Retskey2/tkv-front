import axios from "@/shared/api/axios";

export const getTransactionHistory = () => {
  return axios.get(`/transaction-history`);
};
