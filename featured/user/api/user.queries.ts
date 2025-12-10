import { useQuery } from "@tanstack/react-query";
import { getUser } from "./user.api";

export function useUser(id?: string) {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id).then((res) => res.data),
  });
}
