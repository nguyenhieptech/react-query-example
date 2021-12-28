// Effective React Query Keys
// https://tkdodo.eu/blog/effective-react-query-keys#use-query-key-factories
// https://tkdodo.eu/blog/leveraging-the-query-function-context#query-key-factories

export const userKeys = {
  all: ['users'],
  details: () => [...userKeys.all, 'detail'],
  detail: (id: number) => [...userKeys.details(), id],
  pagination: (page: number) => [...userKeys.all, 'pagination', page],
  infinite: () => [...userKeys.all, 'infinite'],
};

// ES5
// export const userKeys = {
//   all: ['users'],
//   details: function () {
//     return [...userKeys.all, 'detail'];
//   },
//   detail: function (id: number) {
//     return [...userKeys.details(), id];
//   },
//   pagination: function (page: number) {
//     return [...userKeys.all, 'pagination', page];
//   },
//   infinite: function () {
//     return [...userKeys.all, 'infinite'];
//   },
// };
