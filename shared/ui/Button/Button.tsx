import { ButtonProps, ButtonVariant } from './type';
import styles from './Button.module.scss';
import clsx from 'clsx';

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  className,
  ...rest
}: ButtonProps) => {
  const variants: Record<ButtonVariant, string> = {
    primary: styles['primary'],
    secondary: styles['secondary'],
  };

  return (
    <button
      onClick={onClick}
      className={clsx(styles['button'], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};
