import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { apiClient, userQueryKeys } from '@/api';
import { TSFixMe, User } from '@/types';

export function useEditUser() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  // https://react-query.tanstack.com/guides/optimistic-updates#updating-a-single-todo
  const editUserFn = async (updatedUser: User) => {
    const response = await apiClient.put(`/${id}`, updatedUser);
    return response;
  };

  return useMutation({
    mutationFn: editUserFn,
    onMutate: async (updatedUser) => {
      await queryClient.cancelQueries(userQueryKeys.detail(Number(id)));
      const previousUser = queryClient.getQueryData(
        userQueryKeys.detail(Number(id))
      );
      queryClient.setQueryData(userQueryKeys.detail(Number(id)), updatedUser);
      return { previousUser: previousUser, updatedUser: updatedUser };
    },
    onError: (err, updatedUser, context?: TSFixMe) => {
      queryClient.setQueryData(
        userQueryKeys.detail(Number(id)),
        context.previousUser
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries(userQueryKeys.all);
    },
  });
}
