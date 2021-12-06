import { Fragment } from 'react';
import { useLoadMoreUsers } from './hooks/useLoadMoreUsers';

function InfiniteQuery() {
  const pageLimit = 10;
  const loadMoreUsers = useLoadMoreUsers({ pageLimit });
  let userList;

  if (loadMoreUsers.data) {
    userList = loadMoreUsers.data.pages.map((page, index) => (
      <Fragment key={index}>
        {page.data.map((user: any) => (
          <li key={user.id}>
            {user.id}. {user.first_name} {user.last_name}
          </li>
        ))}
      </Fragment>
    ));
  }

  return (
    <div>
      <h2>Infinite Query</h2>
      <div>
        {loadMoreUsers.error instanceof Error && (
          <div>An error occurred: {loadMoreUsers.error.message}</div>
        )}

        {loadMoreUsers.isFetchingNextPage && <div>Fetching Next Page...</div>}

        {loadMoreUsers.isSuccess && <ul className="my-4 ml-4">{userList}</ul>}
      </div>
      <div>
        <button
          className="btn btn-load"
          onClick={() => loadMoreUsers.fetchNextPage()}
          disabled={
            !loadMoreUsers.hasNextPage || loadMoreUsers.isFetchingNextPage
          }
        >
          Load More...
        </button>
      </div>
    </div>
  );
}

export default InfiniteQuery;
