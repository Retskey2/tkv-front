'use client';

import { useForm, SubmitHandler, useWatch } from 'react-hook-form';
import { DropdownInput } from '../../DropdownInput/DropdownInput';
import { CURR_WALLET } from '@/shared/constants/constansts.controller';
import { Button } from '../../Button';
import { IFormValues } from './types';

import styles from './CurrencyForm.module.scss';
import { AmountInput } from '../../AmountInput/AmountInput';

export default function CurrencyForm() {
  const { handleSubmit, control } = useForm<IFormValues>({
    defaultValues: { currency: CURR_WALLET[0].id, amount: 100 },
  });

  const amount = useWatch({
    control,
    name: 'amount',
    defaultValue: 100,
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    const selectedCurrency = CURR_WALLET.find((c) => c.id === data.currency);
    console.log(selectedCurrency, 'Amount:', data.amount);
  };

  const numericAmount = Number((amount || 0).toString().replace(',', '.'));

  const isDisabled = numericAmount < 100 || numericAmount > 9999.99;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles['container-form']}>
      <div className={styles['container-inputs']}>
        <AmountInput control={control} name="amount" />
        <DropdownInput control={control} name="currency" />
      </div>
      <Button disabled={isDisabled} type="submit" className={styles['submit-button']}>
        {amount < 100 ? 'Minimum 100 points required' : `Buy ${amount} Points`}
      </Button>
    </form>
  );
}
