import clsx from 'clsx';
import { ITab } from '../types';
import styles from './Tab.module.scss';

export const Tab = ({ children, active, onClick }: ITab) => (
  <button className={clsx(styles['tab-item'], active && styles['active-item'])} onClick={onClick}>
    {children}
  </button>
);
