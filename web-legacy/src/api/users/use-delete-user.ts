import { http } from "@/api/http-client";
import { toast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userQueryKeys } from "./user-query-keys";

export interface Props {
  id?: string;
}

export function useDeleteUser(id: string) {
  const queryClient = useQueryClient();

  async function deleteUserHttp() {
    const response = await http.delete(`${id}`);
    return response;
  }

  return useMutation({
    mutationFn: deleteUserHttp,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: userQueryKeys.all });
    },
    onSuccess: () => {
      toast({
        variant: "success",
        title: "Delete user successfully",
      });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: userQueryKeys.all });
    },
  });
}
