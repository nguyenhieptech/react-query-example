import UserTable from '../../components/UserTable';
import { useGetUsers } from './hooks/useGetUsers';

function Users() {
  const getUsers = useGetUsers();

  return (
    <div>
      <h2 className="mb-4">Basic Query Example</h2>
      <div>
        {getUsers.isLoading && <div>Loading...</div>}

        {getUsers.error instanceof Error && <div>{getUsers.error.message}</div>}

        {getUsers.isSuccess && (
          <div>
            <UserTable users={getUsers.data} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Users;
