'use client';

import { useUser } from '@/featured/user/api/user.queries';
import CurrencyForm from '@/shared/ui/Forms/CurrencyForm/CurrencyForm';

export const CurrencyFormContainer = () => {
  const { data } = useUser();

  // if (isLoading) return <p>Loading...</p>;
  // if (error || !data) return <p>Error loading fund statistics</p>;

  return <CurrencyForm maxPoints={data?.points ?? 9998.99} />;
};
