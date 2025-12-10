import { TransactionHistory } from '@/featured/transaction-history/types/types';
import { Avatar } from '../../Avatar/Avatar';

interface ListItemProps {
  item?: TransactionHistory;
  idx: number;
}

export const ListItem = ({ item, idx }: ListItemProps) => {
  return (
    <li className="flex flex-row gap-3 rounded-[12px] border border-[#7474801F] p-3">
      <Avatar src="/image.jpg" alt="User" size="large" />

      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex flex-col">
          <div>{item?.user?.username}</div>
          <div className="text-[#636363]">
            {item?.amount} {item?.currency}
          </div>
        </div>
        <div className="text-[#636363]">#{idx + 1}</div>
      </div>
    </li>
  );
};
