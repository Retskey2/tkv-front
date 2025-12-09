import styles from "./ProfileHeader.module.scss";
import { Profile, OutlineLabel } from "@/shared/ui";

export const ProfileHeader = () => {
  return (
    <div className={styles["container"]}>
      <Profile />
      <OutlineLabel label="Points" />
    </div>
  );
};
