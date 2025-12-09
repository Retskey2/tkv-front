import { FC } from "react";
import Image from "next/image";
import styles from "./Avatar.module.scss";

export interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: "small" | "medium" | "large" | number;
  shape?: "circle" | "square" | "rounded";
  onClick?: () => void;
}

const sizeMap = {
  small: 38,
  medium: 45,
  large: 64,
};

export const Avatar: FC<AvatarProps> = ({
  src,
  alt = "User avatar",
  size = "medium",
  className = "",
  onClick,
}) => {
  const avatarSize = typeof size === "number" ? size : sizeMap[size];

  if (!src) return null;

  return (
    <Image
      className={`${styles["avatar"]}  ${className ?? ""}`}
      src={src}
      width={avatarSize}
      height={avatarSize}
      onClick={onClick}
      alt={alt}
      style={{
        width: avatarSize,
        height: avatarSize,
      }}
    />
  );
};
