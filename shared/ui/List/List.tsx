import { TransactionHistory } from "@/featured/transaction-history/types/types";
import { ListItem } from "./ListItem/ListItem";

interface ListProps {
  data?: TransactionHistory[];
}

export const List = ({ data = [] }: ListProps) => {
  return (
    <ul className="flex flex-col gap-2 h-full overflow-auto">
      {data?.map((item, idx) => (
        <ListItem item={item} key={item.id} idx={idx} />
      ))}
    </ul>
  );
};
