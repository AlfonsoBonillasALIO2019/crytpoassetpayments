import React from "react";
import styled from "styled-components";
import { Card } from "./card";
import { Header2 } from "./Headers";
import DefaultInput from "./inputs";
import { Title } from "./typography";
import Button from "./button";
import { Framework } from '@superfluid-finance/sdk-core';
import { ethers } from "ethers";

const Wrapper = styled.div`
  min-width: 400px;
  gap: 32px;
  display: flex;
  flex-direction: column;
`;

const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const handlerCreateFlow = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider,
    });

    const DAIxContract = await sf.loadSuperToken('fDAIx');
    const DAIx = DAIxContract.address;

    const createFlowOperation = sf.cfaV1.createFlow({
      receiver: '0x5F31a7FA8a3770Bd4C015952dB847456f5a6dCe0',
      flowRate: '100000000',
      superToken: DAIx,
    });

    const result = await createFlowOperation.exec(signer);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const handlerDeleteFlow = async () => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const chainId = await window.ethereum.request({ method: 'eth_chainId' });
    const sf = await Framework.create({
      chainId: Number(chainId),
      provider: provider,
    });

    const DAIxContract = await sf.loadSuperToken('fDAIx');
    const DAIx = DAIxContract.address;

    const deleteFlowOperation = sf.cfaV1.deleteFlow({
      sender: await signer.getAddress(),
      receiver: '0x5F31a7FA8a3770Bd4C015952dB847456f5a6dCe0',
      superToken: DAIx,
    });

    const result = await deleteFlowOperation.exec(signer);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const PaymentForm = () => {
  return (
    <Card>
      <Wrapper>
        <Header2 />
        <Form>
          <FormSection>
            <Title>Set up</Title>
            <DefaultInput placeholder={"Payment name"} />
            <DefaultInput placeholder={"Beneficiary adress"} />
          </FormSection>
          <FormSection>
            <Title>Configuration</Title>
            <DefaultInput />
            <DefaultInput />
          </FormSection>
          <FormSection>
            <Title>Resume</Title>
          </FormSection>
        </Form>
        <Button>Save</Button>
      </Wrapper>
    </Card>
  );
};

export default PaymentForm;
