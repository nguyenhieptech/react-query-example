import axios from 'axios';
import { useQuery } from 'react-query';
import { api } from 'src/api/api';
import { userKeys } from './queryKeys';

export function useGetUsers() {
  const getUsers = async () => {
    const response = await axios.get(api);
    return response.data;
  };

  const usersInfo = useQuery(userKeys.all, getUsers, {
    retry: 1,
  });

  return usersInfo;
}

// const fetchUsers = async () => await (await fetch(api)).json()
// or
// const fetchUsers = async () => {
//   const response = await fetch(api)
//   return response.json()
// }
// are the same
