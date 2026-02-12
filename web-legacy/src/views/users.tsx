// import { useUsers } from "@/api/users";
import { ThemeToggle } from "@/components/theme-toggle";
import { UsersPage } from "@/components/users-table/page";

export function Users() {
  // const users = useUsers();

  return (
    <div className="px-10">
      <ThemeToggle />
      {/* <div>
        {users.isLoading && (
          <div className="py-2 font-bold text-teal-900">Loading...</div>
        )}

        {users.isFetching && (
          <div className="py-2 font-bold text-teal-900">Fetching...</div>
        )}

        {users.error instanceof Error && <div>{users.error.message}</div>}

        {users.isSuccess && (
          <div>
            <DataTable data={users.data} columns={columns} />
            <UserTable users={users.data} />
          </div>
        )}
      </div> */}
      <UsersPage />
    </div>
  );
}
