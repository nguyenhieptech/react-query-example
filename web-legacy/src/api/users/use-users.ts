import { http } from "@/api/http-client";
import { User } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "./user-query-keys";

async function getUsersHttp() {
  const response = await http.get<Promise<User[]>>("");
  return response.data;
}

export function useUsers() {
  return useQuery({
    queryKey: userQueryKeys.all,
    queryFn: getUsersHttp,
  });
}
