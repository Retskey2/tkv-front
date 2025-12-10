"use client";

import { Avatar } from "../Avatar/Avatar";
import styles from "./Profile.module.scss";

import { User } from "@/featured/user/model/types";

interface IProfile {
  userData?: User | null;
}

export const Profile = ({ userData }: IProfile) => {
  return (
    <div className={styles["container"]}>
      <Avatar
        src={userData?.photoUrl ?? "/image.jpg"}
        alt={userData?.username ?? "avatar"}
        size="medium"
      />

      <div className={styles["info"]}>
        <h1>{userData?.username ?? "Unknown"}</h1>
        <p>Your rank #2932</p>
      </div>
    </div>
  );
};
