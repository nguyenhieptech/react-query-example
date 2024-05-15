import { usePaginatedUsers } from "@/api/users";
import { UserTable } from "@/components/user-table";
import { useState } from "react";

export function PaginatedUsers() {
  const [page, setPage] = useState(1);
  const pageLimit = 15;
  const paginatedUsers = usePaginatedUsers({
    page,
    pageLimit,
  });

  function previousPage() {
    if (page > 1) setPage(page - 1);
  }

  function nextPage() {
    setPage(page + 1);
  }

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
      <div className="mt-4 flex items-center justify-between">
        <button className="btn btn-page" onClick={previousPage} disabled={page <= 1}>
          Previous
        </button>
        <span className="rounded font-semibold text-teal-900">Page: {page}</span>
        <button
          className="btn btn-page"
          onClick={nextPage}
          disabled={paginatedUsers.data && paginatedUsers.data.length < pageLimit}
        >
          Next
        </button>
      </div>
    </div>
  );
}
