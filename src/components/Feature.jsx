import React from "react";
import styled from "styled-components";
import CleaningSupplies from "../img/CleaningSupplies.png";
import AnimatedShapes from "./AnimatedShapes";

const Container = styled.div`
  display: flex;
  padding: 20px;
  height: 100%;
`;
const Left = styled.div`
  width: 50%;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Image = styled.img`
  clip-path: polygon(0 0, 50% 0, 33% 100%, 0 100%);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;

`;

const Title = styled.span`
  font-size: 70px;
`;
const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;
const List = styled.li`
  font-weight: bold;
`;
const We = styled.p`
  font-size: 20px;
  color: black;
  padding: 10px;
`;
const Decs = styled.p`
  font-style: 20px;
  color: #777;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  background-color: red;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={CleaningSupplies} />
      </Left>
      <Right>
        <Title>
          <b>Our</b> Mission,
          <br />
          Maintaining the highest quality standard.
        </Title>
        <SubTitle>What makes us great?</SubTitle>
        <Decs>
          Building a strong and trusting relationship with our clients is very
          important to us. We believe in the old fashion way of business, client
          first. We strive to maintain well trained, honest, trustworthy,
          reliable and very personable staff. Our focus and drive is customer
          satisfaction, this is our motivation. We believe in delivering a
          service that will satisfy all our clients cleaning needs.
        </Decs>
        <Decs>
          <We>
            <i>
              <b>We promise you this.</b>
            </i>
          </We>
          <List>Superior service</List>
          <List>It's about you and your needs</List>
          <List>
            We have a strict hiring practice and employee training which shows
            in the integrity of our work
          </List>
          <List>
            We are not looking to break the bank. Our rates are very competitive
          </List>
          <List>
            In the event there is a client concern, we take it serious and
            implement a corrective action to ensure the issue does not reoccur
          </List>
          <List>
            We appreciate our opportunities. Because of this, we go over and
            beyond to make sure our clients are 100% satisfied with Executive
            Cleaning Solutions
          </List>
        </Decs>
        <Button>Learn More</Button>
      </Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Feature;
