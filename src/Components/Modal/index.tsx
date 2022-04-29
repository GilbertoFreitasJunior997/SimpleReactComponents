import { FC } from "react";
import ReactDOM from "react-dom";
import Button from "../Button";
import IModalProps from "./IProps";
import { popOutTimer, BackgroundBlur, ModalContainer, CloseButtonContainer, CloseButton, TitleContainer, ModalTitle, ContentContainer, FooterContainer, FooterItem } from "./styles";

const Modal: FC<IModalProps> = ({ title, isOpen, onConfirm, onClose, dontCloseOnConfirm, hideCloseButton, children }) => {
    const modalId = `modal_id_&${Math.random() * Math.random()}`

    const handleClose = () => {
        const modalElement = document.getElementById(modalId);
        if (modalElement)
            modalElement.classList.add("animPopOut");

        setTimeout(() => {
            onClose();
        }, popOutTimer)
    }

    const ModalComponent = (
        <BackgroundBlur>
            <ModalContainer
                className="animPopIn"
                id={modalId}
            >
                {!hideCloseButton &&
                    <CloseButtonContainer>
                        <CloseButton
                            onClick={handleClose}
                        >
                            X
                        </CloseButton>
                    </CloseButtonContainer>}

                {title ?
                    <TitleContainer>
                        <ModalTitle>{title}</ModalTitle>
                    </TitleContainer>
                    : null}

                <ContentContainer>
                    {children}
                </ContentContainer>

                <FooterContainer>
                    <FooterItem>
                        <Button
                            onClick={handleClose}
                        >
                            Close
                        </Button>
                    </FooterItem>
                    <FooterItem>
                        <Button
                            onClick={async () => {
                                await onConfirm();

                                if (!dontCloseOnConfirm) {
                                    handleClose();
                                }
                            }}
                        >
                            Confirm
                        </Button>
                    </FooterItem>
                </FooterContainer>
            </ModalContainer>
        </BackgroundBlur>
    )

    if (!isOpen) return null;

    return ReactDOM.createPortal(ModalComponent, document.body);
}

export default Modal;
