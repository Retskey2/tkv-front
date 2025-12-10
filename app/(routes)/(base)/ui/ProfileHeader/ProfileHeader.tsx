"use client";

import styles from "./ProfileHeader.module.scss";
import { Profile, OutlineLabel } from "@/shared/ui";
import { useUser } from "@/featured/user/api/user.queries";
import { useTelegramUser } from "@/shared/lib/hooks/useTelegramUser";

export const ProfileHeader = () => {
  const { userData } = useTelegramUser();

  const { data: user } = useUser(userData?.id.toString() ?? "");

  return (
    <div className={styles.container}>
      <Profile userData={user} />
      <OutlineLabel label="Points" text={user?.points?.toString()} />
    </div>
  );
};
