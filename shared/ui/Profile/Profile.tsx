import { Avatar } from "../Avatar/Avatar";
import styles from "./Profile.module.scss";

export const Profile = () => {
  return (
    <div className={styles["container"]}>
      <Avatar src="/image.jpg" alt="User" size="medium" />
      <div className={styles["info"]}>
        <h1>Username</h1>
        <p>You Rank #2932</p>
      </div>
    </div>
  );
};
