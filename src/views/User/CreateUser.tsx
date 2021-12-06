import { Redirect } from 'react-router-dom';
import UserForm from '../../components/UserForm';
import { useCreateUser } from './hooks/useCreateUser';

function CreateUser() {
  const createUser = useCreateUser();

  const onSubmit = async (data: any) => createUser.mutate(data);

  if (createUser.isSuccess) {
    return <Redirect to="/" />;
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

export default CreateUser;
