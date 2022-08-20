import React from "react";
import styled from "styled-components";
import { Title } from "./typography";
import FeatherIcon from "feather-icons-react";

const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.colors.blue};
  padding-left: 8px;
`;

const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonWithIcon = ({ onClick, icon, children }) => {
  return (
    <ButtonWrapper onClick={onClick}>
      <FeatherIcon icon={icon} stroke="#2F80ED" />
      <StyledTitle>{children}</StyledTitle>
    </ButtonWrapper>
  );
};

export default ButtonWithIcon;
