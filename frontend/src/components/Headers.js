import React from "react";
import styled from "styled-components";
import { Title } from "./typography";
import ButtonWithIcon from "./buttonWithIcon";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.lightBlue};
  border-radius: 8px;
`;

const Header1 = () => {
  return (
    <Wrapper>
      <Title>My recurrent payments</Title>
      <ButtonWithIcon icon={"plus"}>New recurrent payment</ButtonWithIcon>
    </Wrapper>
  );
};

export default Header1;
