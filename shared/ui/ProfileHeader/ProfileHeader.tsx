import { Profile } from "@/shared/ui/Profile/Profile";
import { OutlineLabel } from "@/shared/ui/OutlineLabel/OutlineLabel";
import styles from "./ProfileHeader.module.scss";
import { User } from "@/featured/user/model/types";

type ProfileHeaderProps = {
  userData?: User;
};

export const ProfileHeader = ({ userData }: ProfileHeaderProps) => {
  return (
    <div className={styles["container"]}>
      <Profile userData={userData} />
      <OutlineLabel label="Points" text={userData?.points?.toLocaleString()} />
    </div>
  );
};
