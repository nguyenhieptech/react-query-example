import { useQuery } from 'react-query';
import axios from 'axios';
import { api } from 'src/api/api';
import { userKeys } from './queryKeys';

export function usePaginatedUsers({
  page,
  pageLimit,
}: {
  page: number;
  pageLimit: number;
}) {
  const getUsers = async (p = page): Promise<any> => {
    const response = await axios.get(`${api}?_page=${p}&_limit=${pageLimit}`);
    return response.data;
  };

  const paginatedUsers = useQuery(
    userKeys.pagination(page),
    () => getUsers(page),
    {
      keepPreviousData: true,
    }
  );

  return paginatedUsers;
}

// inside fetchUsers function
// Using fetch
// const response = await fetch(`${api}?_page=${page}&_limit=${pageLimit}`)
// return response.json()
// console.log(res.headers.get('Link')) // Can be used to validate pagination buttons

// Writing 'response' using config object
// const config = {
//   params: {
//     _page: page,
//     _limit: pageLimit,
//   },
// }
// const response = await axios.get(api, config)
