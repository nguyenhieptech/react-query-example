import { useDeleteUser } from "@/api/users";
import { DeleteModal } from "@/components/delete-modal";
import { AiOutlineDelete, AiOutlineEdit } from "@/icons";
import { User } from "@/types";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./user-table.css";

type Props = {
  users: User[];
};

export function UserTable({ users }: Props) {
  const [deleteId, setDeleteId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function closeModal() {
    setIsModalOpen(false);
  }

  function showDeleteModal(id: number) {
    setDeleteId(id);
    setIsModalOpen(true);
  }

  const deleteMutation = useDeleteUser({ closeModal });

  const handleDelete = async (id: number) => {
    deleteMutation.mutateAsync(id);
  };

  return (
    <>
      <DeleteModal
        id={deleteId}
        isModalOpen={isModalOpen}
        cancelAction={closeModal}
        deleteAction={handleDelete}
        isLoading={deleteMutation.isPending}
      />

      <div className="mb-4 flex items-center justify-between">
        <Link
          to="/user/create"
          className="rounded border-2 border-teal-700 px-4 py-1 font-semibold text-teal-900 hover:border-none hover:bg-teal-800 hover:text-white"
        >
          Create User
        </Link>
      </div>
      <table className="table-fixed text-gray-800">
        <thead className="bg-cyan-900 text-white">
          <tr className="py-4">
            <th className="w-1/12">Id</th>
            <th className="w-3/12">First Name</th>
            <th className="w-3/12">Last Name</th>
            <th className="w-3/12">Email</th>
            <th className="w-1/12">Gender</th>
            <th className="w-1/12">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user: User) => (
              <tr
                className="border border-cyan-800 bg-white hover:bg-lime-100 active:bg-lime-700 active:text-lime-100"
                key={user.id}
              >
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td className="hover:underline">{user.email}</td>
                <td>{user.gender}</td>
                <td className="inline-flex border-none">
                  <Link
                    className="p-2 text-cyan-800 hover:text-cyan-500"
                    to={`/user/edit/${user.id}`}
                  >
                    <AiOutlineEdit />
                  </Link>
                  <button
                    className="p-2 text-cyan-800 hover:text-cyan-500"
                    onClick={() => showDeleteModal(user.id!)}
                  >
                    <AiOutlineDelete />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
