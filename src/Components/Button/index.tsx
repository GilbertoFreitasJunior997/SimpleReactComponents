import { FC } from "react";
import styled from "styled-components";
import IButtonProps from "./IProps";
import { StyledButton } from "./styles";

const Button: FC<IButtonProps> = ({ children, ...buttonProps }) => {
    return (
        <StyledButton {...buttonProps}>
            {children}
        </StyledButton>
    )
}

export default Button;
