import axios from '@/shared/api/axios';

export const getUser = (id?: string) => {
  return axios.get(`/users/${id}`);
};
