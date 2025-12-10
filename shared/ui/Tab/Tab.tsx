import clsx from "clsx";

interface ITab {
  children: React.ReactNode;
  active: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Tab = ({ children, active, onClick }: ITab) => (
  <button
    className={clsx(
      "whitespace-nowrap px-3 py-2 rounded-[10px] text-xs transition",
      active ? "bg-white text-[#253341]" : "bg-[#7474801F] text-white"
    )}
    onClick={onClick}
  >
    {children}
  </button>
);
