import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = ({ children }) => {
  const modalID = document.getElementById("modal");
  return createPortal(
    <div className="ModalBackground">{children}</div>,
    modalID
  );
};

export { Modal };
