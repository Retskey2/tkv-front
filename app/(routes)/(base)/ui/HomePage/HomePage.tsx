import ProfileHeader from "../ProfileHeader/ProfileHeader";
import styles from "./HomePage.module.scss";

export default function HomePage() {
  return (
    <div className={styles["container"]}>
      <ProfileHeader />
    </div>
  );
}
