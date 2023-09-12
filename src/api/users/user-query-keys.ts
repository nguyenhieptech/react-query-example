// Effective React Query Keys
// https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories
// https://tkdodo.eu/blog/leveraging-the-query-function-context#query-key-factories

export const userQueryKeys = {
  all: ['users'],
  details: () => [...userQueryKeys.all, 'detail'],
  detail: (id: number) => [...userQueryKeys.details(), id],
  pagination: (page: number) => [...userQueryKeys.all, 'pagination', page],
  infinite: () => [...userQueryKeys.all, 'infinite'],
};
