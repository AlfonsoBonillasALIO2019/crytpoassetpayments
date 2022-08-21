import React from "react";
import styled from "styled-components";
import { Card } from "./card";
import { Title, BodyGray } from "./typography";
import ButtonWithIcon from "./buttonWithIcon";
import { Header1 } from "./Headers";
import ListItem from "./listItem";

const Wrapper = styled.div`
  min-width: 400px;
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


const PaymentList = (props) => {
  const accountNum = props.account;
  const shortAddr = accountNum.slice(0,5) + '...' + accountNum.slice(accountNum.length - 4, accountNum.length);

  return (
    <Card>
      <Wrapper>
        <PaymentListHeader>
          <Title>{shortAddr}</Title>
          <ButtonWithIcon icon={"log-out"}>Log-out</ButtonWithIcon>
        </PaymentListHeader>
        <Header1 />
        <PaymentsList>
          {/* <EmptyList>
            <BodyGray>There are no recurrent payments</BodyGray>
          </EmptyList> */}
          <ListItem isActive={true}>[Payment name]</ListItem>
          <ListItem isActive={false}>[Payment name]</ListItem>
        </PaymentsList>
      </Wrapper>
    </Card>
  );
};

export default PaymentList;
