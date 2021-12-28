import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { api } from 'src/api/api';

export interface Props {
  setFlashMessage: any;
  hideModal: () => void;
}

export function useDeleteUser({ setFlashMessage, hideModal }: Props) {
  const queryClient = useQueryClient();

  const deleteUser = async (id: any) => {
    const response = await axios.delete(`${api}/${id}`);
    return response.data;
  };

  const mutation = useMutation((id) => axios.delete(`${api}/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      setFlashMessage('Delete Successful!');
      hideModal();
    },
  });

  return mutation;
}
