import React from "react";
import styled from "styled-components";
import { Card } from "./card";
import { Header2 } from "./Headers";
import DefaultInput from "./inputs";
import { Title } from "./typography";
import Button from "./button";

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
