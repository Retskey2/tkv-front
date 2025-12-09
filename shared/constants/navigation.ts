import IconSvg1 from "@/shared/assets/icons/Frame1.svg";
import IconSvg2 from "@/shared/assets/icons/Frame2.svg";
import IconSvg3 from "@/shared/assets/icons/Frame3.svg";
import IconSvg4 from "@/shared/assets/icons/Frame4.svg";
import IconSvg5 from "@/shared/assets/icons/Frame5.svg";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export const NAV_ITEMS: NavItem[] = [
  { href: "/", icon: IconSvg1, label: "Главная" },
  { href: "/ideas", icon: IconSvg2, label: "Идеи" },
  { href: "/chat", icon: IconSvg3, label: "Чаты" },
  { href: "/add", icon: IconSvg4, label: "Создать." },
  { href: "/list", icon: IconSvg5, label: "Лист" },
];
