import { useParams } from 'react-router-dom';
import { apiClient, userQueryKeys } from '@/api';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { id } = useParams();

  const getUserFn = async () => {
    const response = await apiClient.get(`${id}`);
    return response.data;
  };

  return useQuery({
    queryKey: userQueryKeys.detail(Number(id)),
    queryFn: getUserFn,
    retry: 1,
  });
}
