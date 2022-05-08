import styled from "styled-components";

const selectedColor = "rgb(0,48,136)";
const disabledColor = "rgb(0,178,256)";
const activeColor = "rgb(0,88,176)";

export const StepperContainer = styled.div`
    width: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
    padding-bottom: 10px;
`;

export const StepContainer = styled.div`
    display: flex;
    position: relative;

    @keyframes changeStep {
        from {
            font-size: 15px;
        }
        to {
            font-size: 20px;
            width: 55px;
            height: 55px;
        }
    }
`

export const Step = styled.div<{
    isActive: boolean;
    isSelected: boolean;
}>`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    color: white;
    font-family: 'Roboto';

    box-shadow: 0 3px 4px 1px rgba(0, 188, 246, 0.8);
    background-color: ${p => p.isSelected ? selectedColor : p.isActive ? activeColor : disabledColor};

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    margin: 5px;
    margin-bottom: 20px;

    ${p => p.isSelected &&
        `animation: changeStep linear 150ms forwards`
    }
`;


export const Text = styled.div`
    position: absolute;
    color: black;
    width: fit-content;
    font-size: 15px;
    font-weight: 500;
    bottom: 0px;
`;

export const StepDivider = styled.div<{
    isActive: boolean;
}>`
    height: 2px;
    width: 100px;
    background-color: ${p => p.isActive ? activeColor : disabledColor};
    margin-bottom: 15px;

    align-self: center;
`;
