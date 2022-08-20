import React from "react";
import styled from "styled-components";
import { Body } from "./typography";
import StatusPoint from "./statusPoint";
import FeatherIcon from "feather-icons-react";
import ButtonWithIcon from "./buttonWithIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

const ListItem = ({ isActive, children }) => {
  return (
    <Wrapper>
      <>
        <StatusPoint isActive={isActive} />
        <Body>{children}</Body>
      </>
      <ButtonWithIcon icon={"edit"} />
    </Wrapper>
  );
};

export default ListItem;
