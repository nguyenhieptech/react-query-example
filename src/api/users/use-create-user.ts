import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient, userQueryKeys } from '@/api';
import { useToast } from '@/components/ui';
import { TSFixMe, User } from '@/types';

const createUserFn = async (newUser: User) => {
  const response = await apiClient.post('', newUser);
  return response.data;
};

// https://tanstack.com/query/latest/docs/react/guides/optimistic-updates
export function useCreateUser() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: createUserFn,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: userQueryKeys.all });
    },
    onSuccess: (data) => {
      toast({
        title: 'New User Created',
        description: `Id: ${data.id} Name: ${data.first_name} ${data.last_name}`,
      });
    },
    onError: (err, newUser, context?: TSFixMe) => {
      queryClient.setQueryData(userQueryKeys.all, context.previousUsers);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all });
    },
  });
}
