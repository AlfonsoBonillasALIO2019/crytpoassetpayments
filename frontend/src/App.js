import { React, useState, useEffect } from "react";
import GlobalStyle from "./styles/globalStyles";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Button from "./components/button";
import { Card } from "./components/card";
import PaymentList from "./components/paymentsList";
// import { ConnectWallet } from "./components/wallet/CheckWallet";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setCurrentAccount(account);
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error);
    }
  }

  /**
  * Implement your connectWallet method here
  */
   const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          {/*
          * If there is no currentAccount render this button
          */}
          {!currentAccount && (
            <Card>
              <Button onClick={connectWallet}>
                Connect Wallet
              </Button>
            </Card>
          )}
          {currentAccount && (
            <PaymentList /> 
          )}
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

export default App;
