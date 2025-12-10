import Link from 'next/link';
import { NavItem } from '../types';
import styles from './FooterNavBarItem.module.scss';

export interface IFooterNavBarItem extends NavItem {
  isActive: boolean;
}

export const FooterNavBarItem = ({ href, icon, isActive }: IFooterNavBarItem) => {
  const Icon = icon;

  return (
    <Link
      key={href}
      href={href}
      className={`${styles['nav-item']} ${isActive ? styles['nav-item-active'] : ''}`}
    >
      <Icon className={`${styles['nav-icon']}`} />
    </Link>
  );
};
