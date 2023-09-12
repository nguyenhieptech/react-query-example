import { apiClient, userQueryKeys } from '@/api';
import { useQuery } from '@tanstack/react-query';

const getUsersFn = async () => {
  const response = await apiClient.get('');
  return response.data;
};

export function useUsers() {
  return useQuery({
    queryKey: userQueryKeys.all,
    queryFn: getUsersFn,
  });
}
