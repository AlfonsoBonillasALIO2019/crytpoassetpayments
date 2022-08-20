import styled from "styled-components";

export const Body = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.black};
`;
export const BodyGay = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.gray};
`;
export const Title = styled.p`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.black};
`;
