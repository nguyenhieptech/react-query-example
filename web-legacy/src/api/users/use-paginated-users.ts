import { http } from "@/api/http-client";
import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "./user-query-keys";

type Props = {
  page: number;
  pageLimit: number;
};

export function usePaginatedUsers({ page, pageLimit }: Props) {
  async function getPaginatedUsersHttp(p = page) {
    const response = await http.get(`?_page=${p}&_limit=${pageLimit}`);
    return response.data;
  }

  return useQuery(userQueryKeys.pagination(page), () => getPaginatedUsersHttp(page), {
    keepPreviousData: true,
  });
}
