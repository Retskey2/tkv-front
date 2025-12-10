import { Control, FieldValues, Path } from 'react-hook-form';

export interface ICurrencyInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
}
