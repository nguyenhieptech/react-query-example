import { Navigate } from 'react-router-dom';
import { UserForm } from '@/components';
import { useCreateUser } from '@/api';
import { User } from '@/types';

export function CreateUser() {
  const createUser = useCreateUser();

  const onSubmit = async (data: User) => createUser.mutate(data);

  // https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
  if (createUser.isSuccess) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>New User</h2>

      {createUser.isLoading && <div>Loading...</div>}

      {createUser.error instanceof Error && (
        <div>An error occurred: {createUser.error.message}</div>
      )}

      <UserForm submitText="Create" submitAction={onSubmit} />
    </div>
  );
}
