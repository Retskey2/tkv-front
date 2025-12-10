import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { getUser } from './user.api';
import { User } from '../model/types';

export function useUser(id?: string): UseQueryResult<User | undefined, Error> {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => {
      if (!id) throw new Error('User id is required');
      return getUser(id).then((res) => res.data);
    },
    enabled: !!id,
  });
}
