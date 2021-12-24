import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useParams } from 'react-router-dom';
import { api } from './utils/api';
import { userKeys } from './utils/queryKeys';

export function useGetUser() {
  // https://reactrouter.com/web/api/Hooks/useparams
  const { id }: any = useParams();

  // https://react-query.tanstack.com/guides/query-functions#query-function-variables
  const fetchUser = async () => {
    const response = await axios.get(`${api}/${id}`);
    return response.data;
  };

  const user = useQuery(userKeys.detail(id), fetchUser, {
    retry: 1,
  });

  return user;
}

export function useEditUser() {
  const { id }: any = useParams();
  const queryClient = useQueryClient();

  // Optimistic Updates
  // https://react-query.tanstack.com/guides/optimistic-updates#updating-a-single-todo
  const editUser = async (updatedUser: any) => {
    return await axios.put(`${api}/${id}`, updatedUser);
  };

  const mutation = useMutation(editUser, {
    onMutate: async (updatedUser) => {
      await queryClient.cancelQueries(userKeys.detail(id));
      const previousUser = queryClient.getQueryData(userKeys.detail(id));
      queryClient.setQueryData(userKeys.detail(id), updatedUser);
      return { previousUser: previousUser, updatedUser: updatedUser };
    },
    onError: (err, updatedUser, context?: any): Promise<unknown> | void => {
      queryClient.setQueryData(userKeys.detail(id), context.previousUser);
    },
    onSettled: () => {
      queryClient.invalidateQueries(userKeys.all);
    },
  });

  return mutation;
}

// using fetch API
// const fetchUser = async ({ queryKey }) => {
//   const [_key, { id }] = queryKey
//   const response = await fetch(`${api}/${id}`)
//   if (!response.ok) {
//     throw new Error(response.statusText)
//   }
//   return response.json()
// }
