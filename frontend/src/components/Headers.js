import React from "react";
import styled from "styled-components";
import { Title } from "./typography";
import ButtonWithIcon from "./buttonWithIcon";

const Wrapper = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.lightBlue};
  border-radius: 8px;
`;

export const Header1 = () => {
  return (
    <Wrapper>
      <Title>My recurrent payments</Title>
      <ButtonWithIcon icon={"plus"}>New recurrent payment</ButtonWithIcon>
    </Wrapper>
  );
};

export const Header2 = () => {
  return (
    <Wrapper style={{ justifyContent: "flex-start" }}>
      <ButtonWithIcon icon={"arrow-left"} />
      <Title>Back to dashboard</Title>
    </Wrapper>
  );
};

export default { Header1, Header2 };
