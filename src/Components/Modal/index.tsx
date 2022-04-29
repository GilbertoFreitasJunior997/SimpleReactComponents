import { FC } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../Button";

interface IModalProps {
    title?: string;

    isOpen: boolean;
    onConfirm: () => Promise<void>;
    onClose: () => void;
    dontCloseOnConfirm?: boolean;

    children?: React.ReactNode;
}

const popInTimer = 250;
const popOutTimer = popInTimer / 1.5;

const Modal: FC<IModalProps> = ({ title, isOpen, onConfirm, onClose, dontCloseOnConfirm, children }) => {
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

const BackgroundBlur = styled.div`
    min-width: 100vw;
    width: 100vw;
    min-height: 100vh;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    
    background-color: rgba(0, 0, 0, 0.5);

    @keyframes popIn {
        from {
            opacity: 0;
            transform: scale(0);
        }
        75% {
            opacity: 1;
            transform: scale(1.1);
        }
        to {
            transform: scale(1);
        }
    }

    @keyframes popOut {
        from {
            opacity: 1;
            transform: scale(1.1);
        }
        to {
            opacity: 0.2;
            transform: scale(0.4);
        }
    }

    .animPopIn {
        animation: popIn ${popInTimer}ms linear forwards;
    }

    .animPopOut {
        animation: popOut ${popOutTimer}ms ease-in forwards;
    }
`

const ModalContainer = styled.div`
    width: 50vw;
    height: 50vh;
    padding: 10px;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 6px;

    border: 1px solid rgb(0, 118, 196);
    box-shadow: 0 3px 4px 1px rgba(0, 188, 246, 0.8);
`

const TitleContainer = styled.div`
    width: 90%;
    margin: 0 auto 4px auto;
    height: auto;

    display: flex;
    flex-direction: column;

    padding: 5px;

    border-bottom: 1px solid rgb(0, 118, 196);
`;

const ModalTitle = styled.div`
    width: 100%;
    margin-left: 10px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 25px;
`;

const ContentContainer = styled.div`
    padding: 10px;
    margin-bottom: auto;
    overflow-y: auto;
    overflow-x: hidden;
`;

const FooterContainer = styled.div`
    width: 90%;
    margin: 4px auto 0 auto;
    height: auto;

    display: flex;
    justify-content: space-between;

    padding: 3px 0;    
    border-top: 1px solid rgb(0, 118, 196);
`;

const FooterItem = styled.div`
`;
