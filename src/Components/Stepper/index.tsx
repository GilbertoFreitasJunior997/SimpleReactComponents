import styled from 'styled-components';
import { FC } from 'react';
import IStepperProps from './IProps';
import { MdCheck } from 'react-icons/md';

const selectedColor = "rgb(0,48,136)";
const disabledColor = "rgb(0,178,256)";
const activeColor = "rgb(0,88,176)";

const Stepper: FC<IStepperProps> = ({ step, totalSteps }) => {
    const total = [];

    for (let i = 0; i < totalSteps; i++)
        total.push(i);

    return (
        <StepperContainer>
            {total.map(i => {
                const isActive = i <= step;
                const isSelected = i === step;

                return (
                    <StepContainer key={i}>
                        {i > 0 && <StepDivider isActive={isActive} />}
                        <Step isActive={isActive} isSelected={isSelected}>
                            {(isActive && !isSelected) ? <MdCheck /> : i + 1}
                        </Step>
                    </StepContainer>
                )
            })}
        </StepperContainer>
    )
}

export default Stepper;

const StepperContainer = styled.div`
    width: auto;

    display: flex;
    justify-content: center;
    align-items: center;
    height: 55px;
`;

const StepContainer = styled.div`
    display: flex;

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

const Step = styled.div<{
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

    ${p => p.isSelected ?
        `animation: changeStep linear 150ms forwards`
        : ""
    }
`;

const StepDivider = styled.div<{
    isActive: boolean;
}>`
    height: 3px;
    width: 100px;
    background-color: ${p => p.isActive ? activeColor : disabledColor};

    align-self: center;
`;
