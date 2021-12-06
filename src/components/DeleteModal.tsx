import Modal from 'react-modal';
import ExclamationIcon from '../icons/exclamation';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(24, 48, 63, 0.79)',
  },
};

function DeleteModal({ id, showModal, deleteAction, cancelAction }: any) {
  return (
    <Modal style={customStyles} isOpen={showModal}>
      <div className="flex">
        <div className="mt-2 text-3xl text-red-700">
          <ExclamationIcon className="" />
        </div>
        <div className="ml-8">
          <h3 className="text-xl font-semibold text-gray-900">
            Delete Confirmation
          </h3>
          <p className="mt-2 text-sm font-semibold text-gray-500">
            Are you sure you want to delete{' '}
            <span className="font-bold">User {id}</span> ?
          </p>
          <div className="mt-8 text-right">
            <button
              className="border border-gray-200 hover:bg-gray-50 btn"
              onClick={cancelAction}
            >
              Cancel
            </button>
            <button
              className="ml-4 text-white bg-red-600 hover:bg-red-700 btn"
              onClick={() => deleteAction(id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteModal;
