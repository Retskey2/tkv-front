export interface ICurriesWallet {
  id: string;
  code: string;
  name: string;
  rate: number;
  icon: string;
}

export interface IFormValues {
  currency: string;
  amount: number;
}

export interface ICurrencyForm {
  maxPoints: number;
}
