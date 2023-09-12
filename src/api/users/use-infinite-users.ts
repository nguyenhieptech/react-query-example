import { apiClient, userQueryKeys } from '@/api';
import { useInfiniteQuery } from '@tanstack/react-query';

export function useInfiniteUsers({ pageLimit }: { pageLimit: number }) {
  const getInfiniteUsersFn = async ({ pageParam = 1 }) => {
    const response = await apiClient.get(
      `?_page=${pageParam}&_limit=${pageLimit}`
    );
    return response;
  };

  // https://joshgoestoflatiron.medium.com/february-10-pagination-in-a-json-server-api-with-the-link-header-dea63eb0a835
  const parseLinkHeader = (linkHeader: string) => {
    const linkHeadersArray = linkHeader
      .split(', ')
      .map((header: string) => header.split('; '));

    const linkHeadersMap = linkHeadersArray.map((header: string[]) => {
      const thisHeaderRel = header[1].replace(/"/g, '').replace('rel=', '');
      const thisHeaderUrl = header[0].slice(1, -1);
      return [thisHeaderRel, thisHeaderUrl];
    });

    return Object.fromEntries(linkHeadersMap);
  };

  // https://tanstack.com/query/latest/docs/react/guides/infinite-queries
  return useInfiniteQuery({
    queryKey: userQueryKeys.infinite(),
    queryFn: getInfiniteUsersFn,
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
}
