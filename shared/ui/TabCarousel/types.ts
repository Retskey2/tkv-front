export interface ITab {
  children: React.ReactNode;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
