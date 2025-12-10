'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { DropdownInput } from '../../DropdownInput/DropdownInput';
import { CURR_WALLET } from '@/shared/constants/constansts.controller';
import { Button } from '../../Button';
import { IFormValues } from './types';

import styles from './CurrencyForm.module.scss';
import { AmountInput } from '../../AmountInput/AmountInput';

export default function CurrencyForm() {
  const { handleSubmit, control } = useForm<IFormValues>({
    defaultValues: { currency: CURR_WALLET[0].id },
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const selectedCurrency = CURR_WALLET.find((c) => c.id === data.currency);

    console.log(selectedCurrency);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['container-form']}>
      <div className={styles['container-inputs']}>
        <AmountInput control={control} name="amount" />
        <DropdownInput control={control} name="currency" />
      </div>
      <Button type="submit" className={styles['submit-button']}>
        Buy
      </Button>
    </form>
  );
}
