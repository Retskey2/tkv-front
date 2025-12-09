import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
}

export const Button = ({
  children,
  variant = "primary",
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  const styles =
    "px-4 text-sm py-[10px] rounded-[14px] font-bold transition-all";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#1D9BF0] text-foreground",
    secondary: "bg-white/10 text-foreground",
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} ${styles} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};
