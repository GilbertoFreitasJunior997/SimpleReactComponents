import { FC } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Button from "../Button";

interface IModalProps {
    title?: string;

    isOpen: boolean;
    onClose: () => void;

    children?: React.ReactNode;
}

const Modal: FC<IModalProps> = ({ title, isOpen, onClose, children }) => {
    const ModalComponent = (
        <BackgroundBlur>
            <ModalContainer>
                {title ?
                    <>
                        <TitleContainer>
                            <ModalTitle>{title}</ModalTitle>
                        </TitleContainer>
                        <SectionDivider />
                    </>
                    : null}
                {children}

                <br />
                <Button onClick={onClose}>Close</Button>
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
`

const ModalContainer = styled.div`
    width: 50vw;
    height: 50vh;
    padding: 10px;

    background-color: white;
    border-radius: 6px;
    box-shadow: 4px 6px 3px 0px rgba(0, 0, 0, 0.4);
`

const TitleContainer = styled.div`
    width: 100%;
    height: 10%;

    display: flex;
    align-items: center;
`;

const ModalTitle = styled.div`
    margin-left: 10px;
`;

const SectionDivider = styled.div`
    width: 80%;
    margin-right: auto;
    height: 1px;

    background-image: linear-gradient(to right, #696969, white);
`;
