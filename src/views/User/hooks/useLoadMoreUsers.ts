import { useInfiniteQuery } from 'react-query';
import axios from 'axios';
import { api } from 'src/api/api';
import { userKeys } from './queryKeys';

export function useLoadMoreUsers({ pageLimit }: { pageLimit: number }) {
  const getUsers = async ({ pageParam = 1 }) => {
    return await axios.get(`${api}?_page=${pageParam}&_limit=${pageLimit}`);
  };

  const parseLinkHeader = (linkHeader: any) => {
    const linkHeadersArray = linkHeader
      .split(', ')
      .map((header: any) => header.split('; '));
    const linkHeadersMap = linkHeadersArray.map((header: any) => {
      const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '');
      const thisHeaderUrl = header[0].slice(1, -1);
      return [thisHeaderRel, thisHeaderUrl];
    });
    return Object.fromEntries(linkHeadersMap);
  };

  // https://react-query.tanstack.com/guides/infinite-queries
  const infiniteUsers = useInfiniteQuery(userKeys.infinite(), getUsers, {
    getNextPageParam: (lastPage) => {
      // The following code block is specific to json-server api
      const nextPageUrl = parseLinkHeader(lastPage.headers.link)['next'];
      if (nextPageUrl) {
        const queryString = nextPageUrl.substring(
          nextPageUrl.indexOf('?'),
          nextPageUrl.length
        );
        const urlParams = new URLSearchParams(queryString);
        const nextPage = urlParams.get('_page');
        return nextPage;
      } else {
        return undefined;
      }
    },
  });

  return infiniteUsers;
}
