import { FC } from "react";
import styled from "styled-components";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...buttonProps }) => {
    return (
        <StyledButton {...buttonProps}>
            {children}
        </StyledButton>
    )
}

export default Button;

const StyledButton = styled.button`
    margin: 0;
    padding: 10px 20px;

    background-color: rgb(0,138,216);
    color: white;
    font-family: 'Roboto';
    
    border-radius: 5px;
    box-shadow: 0 3px 4px 1px rgba(0, 188, 246, 0.8);
    border: none;
    
    cursor: pointer;
    transition: all 250ms ;

    :hover{
        transform: scale(1.05);
        background-color: rgb(0, 118, 196);
        box-shadow: 0 3px 5px 2px rgba(0, 188, 246, 1);
    }

    :active{
        transform: scale(0.95);
        box-shadow: 0 3px 5px 2px rgba(1, 107, 140, 0.8);
    }
`;
