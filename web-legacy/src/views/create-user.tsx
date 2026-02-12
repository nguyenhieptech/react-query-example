import { useCreateUser } from "@/api/users";
import { UserForm } from "@/components/user-form";
import { User } from "@/types";
import { Navigate } from "react-router-dom";

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

      {createUser.isPending && <div>Loading...</div>}

      {createUser.error instanceof Error && (
        <div>An error occurred: {createUser.error.message}</div>
      )}

      <UserForm submitText="Create" submitAction={onSubmit} />
    </div>
  );
}
