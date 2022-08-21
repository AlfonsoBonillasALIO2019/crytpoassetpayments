import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');
  body {
    margin: 0;
    padding: 0;
    background: ${(props) => props.theme.colors.lightBlue};
    font-family: 'Inter', Helvetica, Sans-Serif;
  }
  p {
    margin: 0;
    padding: 0;
  }
  button {
    border: none;
    background: unset;
  }
  input {
    margin: 0;
    padding: 0;
    border: 1px solid ${(props) => props.theme.colors.gray};
  }
`;

export default GlobalStyle;
