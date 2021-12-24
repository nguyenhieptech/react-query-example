import { Redirect } from 'react-router-dom';
import UserForm from 'src/components/UserForm';
import { useEditUser, useGetUser } from './hooks/useEditUser';

function EditUser() {
  const getUser = useGetUser();
  const editUser = useEditUser();

  const onSubmit = async (data: any) => editUser.mutate(data);

  if (editUser.isSuccess) {
    return <Redirect to="/" />;
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

export default EditUser;
