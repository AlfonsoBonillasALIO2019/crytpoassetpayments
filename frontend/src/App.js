import GlobalStyle from "./styles/globalStyles";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Button from "./components/button";
import { Card } from "./components/card";
import PaymentList from "./components/paymentsList";
import PaymentForm from "./components/paymentForm";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Card>
            <Button>Connect wallet</Button>
          </Card>
          {/* <PaymentList /> */}
          {/* <PaymentForm /> */}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
