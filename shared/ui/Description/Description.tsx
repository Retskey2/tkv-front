import { ModalButton } from '@/shared/ui/ModalButton/ModalButton';
import styles from './Description.module.scss';

export const Description = ({ text }: { text: string }) => {
  return (
    <div className={styles['container-description']}>
      <p className={styles['description']}>{text}</p>
      <ModalButton content={<>{text}</>} label="Read More" />
    </div>
  );
};
