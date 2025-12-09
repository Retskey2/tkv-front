import { ListItem } from "../ListItem/ListItem";

export const List = () => {
  return (
    <ul className="flex flex-col gap-2 h-full overflow-auto">
      {new Array(10).fill(0).map((value, idx) => (
        <ListItem key={idx} />
      ))}
    </ul>
  );
};
