import React from "react";
import styled from "styled-components";
import Mop from "../img/Mop.png";
import AnimatedShapes from "./AnimatedShapes";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  height: 100%;
  @media only screen and (max-width: 480px) {
flex-direction:column;  }
`;
const Right = styled.div`
  width: 50%;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  height: 100%;
  position: absolute;
  z-index: 1;
  transform: translate3d(-15%, 25%, 0) scale(0.8);
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 480px) {
    padding: 20px;

  }
`;

const Title = styled.h1`
font-size: 70px;
`;
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
`
const Button = styled.button`
  width: 180px;
  border: none;
  border-radius: 10px;
  color: white;
  background-color: red;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;
`

const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={Mop} />
      </Left>
      <Right>
        <Wrapper>
          <Title>What we offer</Title>
          <Desc>
            You deserve to walk into an immaculately clean facility when you
            arrive to work. Executive Cleaning Solutions promises that you will
            appreciate the cleanliness of your facility and also our highly
            trained staff. Many have asked, what is the benefit of outsourcing
            your cleaning service? Simply said, cleaning is what we do! You can
            focus on your work and do not have to worry about who is going to
            clean the bathroom or vacuum the floors. We will take care of all
            your office cleaning needs, promise! There is a saying "You never
            get a second change to make a first impression". You want your
            employees, customer and guests to be in an environment that shows
            you care.
          </Desc>
          <CardContainer>
            <MiniCard />
          </CardContainer>
          <Button>Get a quote</Button>
        </Wrapper>
      </Right>
      <AnimatedShapes />
    </Container>
  );
};

export default Service;
