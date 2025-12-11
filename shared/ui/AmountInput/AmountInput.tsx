'use client';

import { Controller, FieldValues } from 'react-hook-form';
import IconIncrease from '../../assets/icons/Increase.svg';
import IconDecrease from '../../assets/icons/Decrease.svg';
import { formatNumberAmount } from '@/shared/utils/formatter';
import { IAmountInputProps } from './types';
import styles from './AmountInput.module.scss';

export const AmountInput = <T extends FieldValues>({
  control,
  name,
  min = 100,
  max = 9999.99,
}: IAmountInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const numericValue = Number((field.value || 0).toString().replace(',', '.'));
        const isMaxValue = numericValue >= max;

        const increment = () => field.onChange((numericValue + 1).toFixed(2));
        const decrement = () => field.onChange(Math.max(0, numericValue - 1).toFixed(2));

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          let val = e.target.value.replace(/[^0-9,]/g, '');
          const parts = val.split(',');
          if (parts.length > 2) val = parts[0] + ',' + parts[1];
          field.onChange(val);
        };

        return (
          <div>
            <div className={styles['container-input']}>
              <button type="button" onClick={decrement}>
                <IconDecrease />
              </button>

              <input
                type="text"
                value={formatNumberAmount(field.value, max)}
                onChange={handleChange}
                placeholder="0,00"
              />

              <button disabled={isMaxValue} type="button" onClick={increment}>
                <IconIncrease />
              </button>
            </div>

            {numericValue < min && (
              <p className={styles['info']}>
                You must buy at least <span> {min} points</span>
              </p>
            )}
          </div>
        );
      }}
    />
  );
};
