import { http } from "@/api/http-client";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { userQueryKeys } from "./user-query-keys";

export function useUser() {
  const { id } = useParams();

  async function getUserHttp() {
    const response = await http.get(`${id}`);
    return response.data;
  }

  return useQuery({
    queryKey: userQueryKeys.detail(Number(id)),
    queryFn: getUserHttp,
    retry: 1,
  });
}
