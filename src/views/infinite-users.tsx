import { Fragment } from 'react';
import { useInfiniteUsers } from '@/api';
import { User } from '@/types';

export function InfiniteUsers() {
  const pageLimit = 10;
  const infiniteUsers = useInfiniteUsers({ pageLimit });
  let userList;

  if (infiniteUsers.data) {
    userList = infiniteUsers.data.pages.map((page, index) => (
      <Fragment key={index}>
        {page.data.map((user: User) => (
          <li key={user.id}>
            {user.id}. {user.first_name} {user.last_name}
          </li>
        ))}
      </Fragment>
    ));
  }

  return (
    <div>
      <h2>Infinite Users</h2>
      <div>
        {infiniteUsers.error instanceof Error && (
          <div>An error occurred: {infiniteUsers.error.message}</div>
        )}

        {infiniteUsers.isFetchingNextPage && <div>Fetching Next Page...</div>}

        {infiniteUsers.isSuccess && <ul className="my-4 ml-4">{userList}</ul>}
      </div>
      <div>
        <button
          className="btn btn-load"
          onClick={() => infiniteUsers.fetchNextPage()}
          disabled={
            !infiniteUsers.hasNextPage || infiniteUsers.isFetchingNextPage
          }
        >
          Load More...
        </button>
      </div>
    </div>
  );
}
