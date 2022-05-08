import { FC } from 'react';
import IStepperProps from './IProps';
import { MdCheck } from 'react-icons/md';
import { StepperContainer, StepContainer, StepDivider, Step, Text } from './styles';

const Stepper: FC<IStepperProps> = ({ step, steps }) => {
    return (
        <StepperContainer>
            {steps.map((text, i) => {
                const isActive = i <= step;
                const isSelected = i === step;

                return (
                    <StepContainer key={i}>
                        {i > 0 && <StepDivider isActive={isActive} />}
                        <Step isActive={isActive} isSelected={isSelected}>
                            {(isActive && !isSelected) ? <MdCheck /> : i + 1}
                            <Text>
                                {text}
                            </Text>
                        </Step>
                    </StepContainer>
                )
            })}
        </StepperContainer>
    )
}

export default Stepper;

