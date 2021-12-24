import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { api } from 'src/views/User/hooks/utils/api';

export interface Props {
  setFlashMessage: any;
  hideModal: () => void;
}

export function useDeleteUser({ setFlashMessage, hideModal }: Props) {
  const queryClient = useQueryClient();

  const mutation = useMutation((id) => axios.delete(`${api}/${id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
      setFlashMessage('Delete Successful!');
      hideModal();
    },
  });

  return mutation;
}
