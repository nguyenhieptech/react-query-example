import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient, userQueryKeys } from '@/api';
import { toast } from '@/components/ui';

export interface Props {
  closeModal: () => void;
  id?: number;
}

export function useDeleteUser({ closeModal }: Props) {
  const queryClient = useQueryClient();

  const deleteUserFn = async (id: number) => {
    const response = await apiClient.delete(`${id}`);
    return response;
  };

  return useMutation({
    mutationFn: deleteUserFn,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: userQueryKeys.all });
    },
    onSuccess: () => {
      toast({
        title: 'Delete user successfully',
      });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all });
      closeModal();
    },
  });
}
