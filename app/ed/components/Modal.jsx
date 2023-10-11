import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const close = (
  <FontAwesomeIcon icon={faClose} size="2xl" style={{ color: '#292828' }} />
);

const Modal = ({ children, modalOpen, setModalOpen }) => {
  return (
    <>
      {modalOpen && (
        <div className="bg-mainBlack fixed inset-0 overflow-scroll">
          <div className="flex justify-center items-center h-auto">
            <div className="flex flex-col  p-5">
              <button onClick={() => setModalOpen(false)}>{close}</button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
