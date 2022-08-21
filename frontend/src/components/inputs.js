import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
  padding: 12px;
  border-radius: 8px;
  width; 100%;
  outline-color: ${(props) => props.theme.colors.blue};
`;

const DefaultInput = ({ placeholder }) => {
  return <InputWrapper placeholder={placeholder} />;
};

export default DefaultInput;
