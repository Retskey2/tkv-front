import { Control, FieldValues, Path } from 'react-hook-form';

export interface IAmountInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  min?: number;
  max?: number;
}
