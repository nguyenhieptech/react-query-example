import { useState } from 'react';
import { UserTable } from '@/components';
import { usePaginatedUsers } from '@/api';

export function PaginatedUsers() {
  const [page, setPage] = useState(1);
  const pageLimit = 15;
  const paginatedUsers = usePaginatedUsers({
    page,
    pageLimit,
  });

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div>
      <h2 className="mb-4">Paginated Users</h2>
      <div>
        {paginatedUsers.error instanceof Error && (
          <div>{paginatedUsers.error.message}</div>
        )}

        {paginatedUsers.isLoading && <div>Loading...</div>}

        {paginatedUsers.isSuccess && <UserTable users={paginatedUsers.data} />}
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="btn btn-page"
          onClick={prevPage}
          disabled={page <= 1}
        >
          Previous
        </button>
        <span className="font-semibold text-teal-900 rounded">
          Page: {page}
        </span>
        <button
          className="btn btn-page"
          onClick={nextPage}
          disabled={
            paginatedUsers.data && paginatedUsers.data.length < pageLimit
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
