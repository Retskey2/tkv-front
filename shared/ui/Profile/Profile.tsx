import styles from "./Profile.module.scss";
import Image from "next/image";

export const Profile = () => {
  return (
    <div className={styles["container"]}>
      <Image
        src="/image.jpg"
        width={45}
        height={45}
        alt="avatar"
        className={styles["avatar"]}
      />
      <div className={styles["info"]}>
        <h1>Username</h1>
        <p>You Rank #2932</p>
      </div>
    </div>
  );
};
