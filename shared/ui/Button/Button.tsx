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
    "px-4 text-sm py-[10px] rounded-[14px] font-bold transition-all hover:scale-98 transition-all";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-[#1D9BF0] hover:bg-[#1D9BF0]/80 text-foreground",
    secondary: "bg-white/10 hover:bg-white/15 text-foreground",
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
