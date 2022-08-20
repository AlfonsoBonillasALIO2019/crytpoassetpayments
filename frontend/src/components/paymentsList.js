import React from "react";
import styled from "styled-components";
import { Card } from "./card";
import { Title, BodyGay } from "./typography";
import ButtonWithIcon from "./buttonWithIcon";
import Header1 from "./Headers";

const Wrapper = styled.div`
  min-width: 500px;
`;

const PaymentListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const PaymentsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptyList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
`;

const PaymentList = () => {
  return (
    <Card>
      <Wrapper>
        <PaymentListHeader>
          <Title>User adress</Title>
          <ButtonWithIcon icon={"log-out"}>Log-out</ButtonWithIcon>
        </PaymentListHeader>
        <Header1 />
        <PaymentsList>
          <EmptyList>
            <BodyGay>There are no recurrent payments</BodyGay>
          </EmptyList>
        </PaymentsList>
      </Wrapper>
    </Card>
  );
};

export default PaymentList;
