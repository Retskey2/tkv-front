export interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
  size?: "small" | "medium" | "large" | number;
  shape?: "circle" | "square" | "rounded";
  onClick?: () => void;
}
