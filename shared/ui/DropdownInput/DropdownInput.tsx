'use client';

import { useState } from 'react';
import { CURR_WALLET } from '@/shared/constants/constansts.controller';
import { Controller, FieldValues } from 'react-hook-form';
import IconArrow from '.././../assets/icons/DashIcon.svg';
import { ICurrencyInputProps } from './types';

import styles from './DropdownInput.module.scss';
import clsx from 'clsx';

export const DropdownInput = <T extends FieldValues>({ control, name }: ICurrencyInputProps<T>) => {
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const selectedCurrency = CURR_WALLET.find((c) => c.id === field.value) || CURR_WALLET[0];

        const handleCurrencySelect = (currency: (typeof CURR_WALLET)[0]) => {
          field.onChange(currency.id);
          setIsCurrencyDropdownOpen(false);
        };

        return (
          <div className={styles['container-input']}>
            <label htmlFor="selectId">Set expiration date and time</label>
            <div className={styles['wrapper-input']}>
              <div className={styles['block-dropdown']}>
                <button
                  id="selectId"
                  type="button"
                  onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                >
                  <span>{selectedCurrency.code}</span>
                  <IconArrow
                    className={clsx(styles['svg'], {
                      'rotate-180': isCurrencyDropdownOpen,
                    })}
                  />
                </button>

                {isCurrencyDropdownOpen && (
                  <div className={styles['wrapper-menu']}>
                    {CURR_WALLET.map((currency) => (
                      <button
                        type="button"
                        key={currency.id}
                        onClick={() => handleCurrencySelect(currency)}
                        className={clsx(styles['wrapper-menu-item'], {
                          'bg-[#15202B]': selectedCurrency.id === currency.id,
                        })}
                      >
                        <span>{currency.icon}</span>
                        <div className={styles['inner-item']}>
                          <div className={styles['name']}>{currency.name}</div>
                          <div className={styles['code']}>{currency.code}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className={styles['block-input']}>
                <span>{selectedCurrency.rate.toFixed(4)}</span>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};
