import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;
const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
const Right = styled.div`

  width: 40%;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Description = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>Because you deserve the very best!</Title>
        <Description>
          Executive Cleaning Solutions is your trusted commercial cleaning
          company located in Oakland County, Michigan servicing the sounding
          areas. We pride ourselves in our unwavering pledge to customer
          satisfaction. We are a family owned and operated business that does
          not depend on a large mass of clients for survival
        </Description>
      </Left>
      <Right>R</Right>
    </Container>
  );
};

export default Intro;
