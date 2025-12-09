import { Avatar } from "../Avatar/Avatar";

export const ListItem = () => {
  return (
    <li className="flex flex-row gap-3 p-3 border border-[#7474801F] rounded-[12px]">
      <Avatar src="/image.jpg" alt="User" size="large" />
      <div className="w-full  items-center flex flex-row justify-between">
        <div className="flex flex-col">
          <div>Username</div>
          <div className="text-[#636363]">10 TON</div>
        </div>
        <div className="text-[#636363]">#1</div>
      </div>
    </li>
  );
};
