import { http } from "@/api/http-client";
import { useToast } from "@/components/ui/use-toast";
import { TSFixMe, User } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userQueryKeys } from "./user-query-keys";

async function createUserHttp(newUser: User) {
  const response = await http.post("", newUser);
  return response.data;
}

// https://tanstack.com/query/latest/docs/react/guides/optimistic-updates
export function useCreateUser() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: createUserHttp,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: userQueryKeys.all });
    },
    onSuccess: (data) => {
      toast({
        title: "New User Created",
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
