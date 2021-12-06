import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { api } from '../views/User/hooks/api';
import { useDeleteUser } from './useDeleteUser';
import { AppContext } from '../providers/AppContextProvider';
import FlashAlert from './FlashAlert';
import DeleteModal from './DeleteModal';
import EditIcon from '../icons/edit';
import DeleteIcon from '../icons/delete';
import './table.css';

function UserTable({ users }: any) {
  const { flashMessage, setFlashMessage } = useContext(AppContext);
  const queryClient = useQueryClient();

  // Delete Modal Show State
  const [deleteId, setDeleteId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const deleteMutation = useMutation((id) => axios.delete(`${api}/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      setFlashMessage('Delete Successful!');
      hideModal();
    },
  });

  const hideModal = () => setShowModal(false);

  const deleteUser = useDeleteUser({ setFlashMessage, hideModal });

  const showDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const onDelete = async (id: any) => {
    deleteMutation.mutateAsync(id);
  };

  return (
    <>
      <DeleteModal
        id={deleteId}
        showModal={showModal}
        deleteAction={onDelete}
        cancelAction={hideModal}
      />

      <div className="flex justify-between items-center mb-4">
        <Link
          to="/user/create"
          className="py-1 px-4 font-semibold text-teal-900 rounded border-2 border-teal-700 hover:text-white hover:bg-teal-800 hover:border-none"
        >
          Create User
        </Link>
        {flashMessage && <FlashAlert message={flashMessage} />}
      </div>
      <table className="table-fixed">
        <thead className="text-white bg-cyan-900">
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
            users.map((user: any) => (
              <tr
                className="bg-white border border-cyan-800 hover:bg-lime-100 active:text-lime-100 active:bg-lime-700"
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
                    <EditIcon />
                  </Link>
                  <button
                    className="p-2 text-cyan-800 hover:text-cyan-500"
                    onClick={() => showDeleteModal(user.id)}
                  >
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default UserTable;
