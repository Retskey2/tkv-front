'use client';

import AnimatedProgressBar, {
  AnimatedProgressBarProps,
} from '@/shared/lib/smoothui/animated-progress-bar';
import styles from './ProgressBar.module.scss';

export const ProgressBar = ({ ...rest }: AnimatedProgressBarProps) => {
  return (
    <div className={styles['container']}>
      <AnimatedProgressBar {...rest} />
    </div>
  );
};
