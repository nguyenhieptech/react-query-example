import { apiClient, userQueryKeys } from '@/api';
import { useQuery } from '@tanstack/react-query';

type Props = {
  page: number;
  pageLimit: number;
};

export function usePaginatedUsers({ page, pageLimit }: Props) {
  const getPaginatedUsersFn = async (p = page) => {
    const response = await apiClient.get(`?_page=${p}&_limit=${pageLimit}`);
    return response.data;
  };

  return useQuery(
    userQueryKeys.pagination(page),
    () => getPaginatedUsersFn(page),
    {
      keepPreviousData: true,
    }
  );
}
