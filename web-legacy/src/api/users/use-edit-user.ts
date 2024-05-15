import { http } from "@/api/http-client";
import { TSFixMe, User } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { userQueryKeys } from "./user-query-keys";

export function useEditUser() {
  const { id } = useParams();
  const queryClient = useQueryClient();

  // https://react-query.tanstack.com/guides/optimistic-updates#updating-a-single-todo
  async function editUserHttp(updatedUser: User) {
    const response = await http.put(`/${id}`, updatedUser);
    return response;
  }

  return useMutation({
    mutationFn: editUserHttp,
    onMutate: async (updatedUser) => {
      await queryClient.cancelQueries(userQueryKeys.detail(Number(id)));
      const previousUser = queryClient.getQueryData(userQueryKeys.detail(Number(id)));
      queryClient.setQueryData(userQueryKeys.detail(Number(id)), updatedUser);
      return { previousUser: previousUser, updatedUser: updatedUser };
    },
    onError: (err, updatedUser, context?: TSFixMe) => {
      queryClient.setQueryData(userQueryKeys.detail(Number(id)), context.previousUser);
    },
    onSettled: () => {
      queryClient.invalidateQueries(userQueryKeys.all);
    },
  });
}
