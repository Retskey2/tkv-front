'use client';

import { ProfileHeader } from '@/shared/ui/ProfileHeader/ProfileHeader';

import { useTelegramUser } from '@/shared/lib/hooks/useTelegramUser';
import { useUser } from '@/featured/user/api/user.queries';

export const ProfileHeaderContainer = () => {
  const { userData } = useTelegramUser();
  const { data: user, isLoading } = useUser(userData?.id.toString());

  if (isLoading) return <p>Loading...</p>;

  return <ProfileHeader userData={user} />;
};
