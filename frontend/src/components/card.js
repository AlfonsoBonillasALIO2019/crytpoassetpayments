import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`;
