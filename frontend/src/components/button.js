import React from "react";
import styled from "styled-components";
import { Title } from "./typography";

const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.colors.white};
`;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.blue};
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({ onClick, children }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <StyledTitle>{children}</StyledTitle>
    </ButtonWrapper>
  );
};

export default Button;
