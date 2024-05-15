import { useUsers } from "@/api/users";
import { columns } from "./columns";
import { DataTable } from "./data-table-users";

export function UsersPage() {
  const users = useUsers();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome!</h2>
          <p className="text-muted-foreground">{`Here's the list of your users!`}</p>
        </div>
      </div>
      {users.isLoading && <div className="py-2 font-bold text-teal-900">Loading...</div>}

      {users.isFetching && (
        <div className="py-2 font-bold text-teal-900">Fetching...</div>
      )}

      {users.error instanceof Error && <div>{users.error.message}</div>}

      {users.data && <DataTable data={users.data} columns={columns} />}
    </div>
  );
}
