import { useContext } from 'react';
import CloseIcon from '../icons/close';
import { AppContext } from '../providers/AppContextProvider';

function FlashAlert({ message }: any) {
  const { flashMessage, setFlashMessage } = useContext(AppContext);

  return (
    <div className="flex justify-between items-center px-2 text-lime-800 bg-lime-100 rounded border border-lime-800">
      <span className="py-1 font-bold">Attention: &nbsp;</span> {message}
      <button
        className="p-1 mt-1 ml-8 text-green-800 rounded hover:bg-green-200"
        onClick={() => setFlashMessage('')}
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export default FlashAlert;
