'use client';

import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import IconIncrease from '../../assets/icons/Increase.svg';
import IconDecrease from '../../assets/icons/Decrease.svg';
import { formatNumberAmount } from '@/shared/utils/formatter';

export interface IAmountInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  min?: number;
  max?: number;
}

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
            <div className="flex flex-row items-center justify-center gap-[18px] rounded-[10px] bg-[#15202B] py-3">
              <button type="button" onClick={decrement} className="flex-none">
                <IconDecrease />
              </button>

              <input
                type="text"
                value={formatNumberAmount(field.value, max)}
                onChange={handleChange}
                className="text-foreground w-[110px] text-center text-[24px] font-bold outline-none"
                placeholder="0,00"
              />

              <button type="button" onClick={increment} className="flex-none">
                <IconIncrease />
              </button>
            </div>

            {numericValue < min && (
              <p className="text-foreground/60 mt-2 text-center text-[12px] select-none">
                You must buy at least <span className="text-foreground"> {min} points</span>
              </p>
            )}
          </div>
        );
      }}
    />
  );
};
