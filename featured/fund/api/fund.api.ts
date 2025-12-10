import axios from '@/shared/api/axios';

export const getFundStats = () => {
  return axios.get(`/fund/stats`);
};
