import { UserTable } from '@/components';
import { useUsers } from '@/api';

export function Users() {
  const users = useUsers();

  return (
    <div>
      <h2 className="mb-4">Basic Query Example</h2>
      <div>
        {users.isLoading && (
          <div className="py-2 text-teal-900 font-bold">Loading...</div>
        )}

        {users.isFetching && (
          <div className="py-2 text-teal-900 font-bold">Fetching...</div>
        )}

        {users.error instanceof Error && <div>{users.error.message}</div>}

        {users.isSuccess && (
          <div>
            <UserTable users={users.data} />
          </div>
        )}
      </div>
    </div>
  );
}
