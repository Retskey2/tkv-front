import styles from './DropPage.module.scss';
import CurrencyForm from '@/shared/ui/Forms/CurrencyForm/CurrencyForm';

export default function DropPage() {
  return (
    <div className={styles['container-page']}>
      <CurrencyForm />
    </div>
  );
}
