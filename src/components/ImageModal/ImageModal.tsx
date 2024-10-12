import Modal from "react-modal";
import { Card } from "../../types";

Modal.setAppElement("#root");

type Props = {
  modalIsOpen: boolean;
  closeModal: () => void;
  currentImg: Card;
};

export default function ImageModal({
  modalIsOpen,
  closeModal,
  currentImg,
}: Props) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "black",
    },
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className="modal-close-btn">
          close
        </button>
        <img src={currentImg.urls.regular} alt={currentImg.alt_description} />
      </Modal>
    </div>
  );
}
