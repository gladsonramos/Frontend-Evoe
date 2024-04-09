import React from "react";
import {
  ModalOverlay,
  CloseIcon,
  ModalContainer,
  Space
} from "./styles";

interface ModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

const Close: string = require('../../assets/CloseIcon.png');

function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <CloseIcon src={Close} onClick={onClose} />
            <Space />
            {children}
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default Modal;
