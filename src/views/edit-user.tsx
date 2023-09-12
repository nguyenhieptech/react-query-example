import { Navigate } from 'react-router-dom';
import { UserForm } from '@/components';
import { useEditUser, useUser } from '@/api';
import { User } from '@/types';

export function EditUser() {
  const getUser = useUser();
  const editUser = useEditUser();

  const onSubmit = async (data: User) => editUser.mutate(data);

  // https://reactrouter.com/docs/en/v6/upgrading/v5#use-usenavigate-instead-of-usehistory
  if (editUser.isSuccess) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <h2>Edit User</h2>
      <div>
        {getUser.isLoading && <div>Loading...</div>}

        {getUser.error instanceof Error && <div>{getUser.error.message}</div>}

        {getUser.data && (
          <UserForm
            user={getUser.data}
            submitText="Update"
            submitAction={onSubmit}
          />
        )}
      </div>
    </div>
  );
}
