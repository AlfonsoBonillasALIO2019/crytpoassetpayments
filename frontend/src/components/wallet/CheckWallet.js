import React from "react";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";


//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
  infuraId: process.env.INFURA_KEY,
});

export function ConnectWallet({ connectWallet, networkError, dismiss }) {

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    console.log(accounts);
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    console.log(chainId);
  });

  // Subscribe to session disconnection
  provider.on("disconnect", (code, reason) => {
    console.log(code, reason);
  });

  return ({});

}