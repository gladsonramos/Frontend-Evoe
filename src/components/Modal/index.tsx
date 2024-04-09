
import {
  ModalOverlay,
  CloseIcon,
  ModalContainer,
  Space
} from "./styles";

const Close = require('../../assets/CloseIcon.png')

function Modal({ isOpen, onClose, children }: any) {
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
