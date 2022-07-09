import { useEffect } from "react";
import { createPortal } from "react-dom";

import { Overlay } from "./Modal.styled";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) onClose();
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>{children}</Overlay>,
    modalRoot
  );
};

export default Modal;
