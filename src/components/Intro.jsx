import React from "react";
import styled from "styled-components";
import Conference from "../img/conferenceRoom.jpg";
import AnimatedShapes from "./AnimatedShapes";
import '../style.css'

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;

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

const Info = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;
const Button = styled.button`
  padding: 15px;
  background: darkblue;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const Contacttext = styled.span`
  color: purple;
  margin-top: 5px;
`;
const Phone = styled.span`
  color: purple;
  font-weight: bold;
  text-decoration: none;
`;
const Image = styled.img`
  clip-path: polygon(100% 0%, 61% 0%, 50% 100%, 100% 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
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
        <Info>
          <Button>Learn More</Button>
          <Contact>
            <Phone><a href="tel:(248)767-0976">Call us at (248)767-0976</a></Phone>
            <Contacttext>For any questions or concerns</Contacttext>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Conference} />
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Intro;
