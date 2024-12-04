import { ReactNode } from "react";
import Modal from "react-modal";

interface ModalComponentProps extends ReactModal.Props {
  children: ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const customStyles:Modal.Styles | undefined ={
  content: {
    position: "absolute",
    backgroundColor: "green",
    // padding: "1em"
  },
  overlay:{
    backgroundColor: "red"
  }
};

Modal.setAppElement("#root");
const ModalComponent = (props: ModalComponentProps) => {
  function closeModal() {
    props.setIsOpen(false);
  }
  return (
    <>
      <Modal
        onRequestClose={closeModal}
        shouldCloseOnEsc={true}
        contentLabel="Example Modal"
        {...props}
        style={customStyles}
        // className={props.className + " bg-danger"}
      >
        {props.children}
      </Modal>
    </>
  );
};

export default ModalComponent;
