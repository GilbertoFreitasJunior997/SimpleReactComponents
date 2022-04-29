import styled from "styled-components";
import Button from '../Button/index';

export const popInTimer = 250;
export const popOutTimer = popInTimer / 1.5;


export const BackgroundBlur = styled.div`
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

export const ModalContainer = styled.div`
    width: 50vw;
    height: 50vh;
    padding: 10px;
    display: flex;
    flex-direction: column;
    position: relative;

    background-color: white;
    border-radius: 6px;

    border: 1px solid rgb(0, 118, 196);
    box-shadow: 0 3px 4px 1px rgba(0, 188, 246, 0.8);
`

export const CloseButtonContainer = styled.div`
    position: fixed;
    top: -15px;
    right: -15px;
`
export const CloseButton = styled(Button)`
    transform: scale(0.7);
    color: white;
    font-weight: bolder;
    font-size: 15px;

    :hover{
        transform: scale(0.8);
    }
`

export const TitleContainer = styled.div`
    width: 90%;
    margin: 0 auto 4px auto;
    height: auto;

    display: flex;
    flex-direction: column;

    padding: 5px;

    border-bottom: 1px solid rgb(0, 118, 196);
`;

export const ModalTitle = styled.div`
    width: 100%;
    margin-left: 10px;
    font-family: 'Roboto';
    font-weight: 500;
    font-size: 25px;
`;

export const ContentContainer = styled.div`
    padding: 10px;
    margin-bottom: auto;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const FooterContainer = styled.div`
    width: 90%;
    margin: 4px auto 0 auto;
    height: auto;

    display: flex;
    justify-content: space-between;

    padding: 3px 0;    
    border-top: 1px solid rgb(0, 118, 196);
`;

export const FooterItem = styled.div`
`;
