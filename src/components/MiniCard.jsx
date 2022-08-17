import React from "react";
import styled from "styled-components";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";

const Container = styled.div`
  width: 180px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 8px 10px 21px -11px rgba(255, 0, 0, 0.64);
  -webkit-box-shadow: 8px 10px 21px -11px rgba(255, 0, 0, 0.64);
  -moz-box-shadow: 8px 10px 21px -11px rgba(255, 0, 0, 0.64);
  align-items: center;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Text = styled.span`
  margin-top: 20px;
  text-align: left;
  padding: 5px;
  `;

const MiniCard = () => {
  return (
    <>
      <Container>
        <Image src={card1} />
        <Text>
          <b>Office Cleaning:</b>
          <li>Around the clock operational support</li>
          <li>Flexible cleaning plans to fit your needs</li>
          <li>Restocking</li>
          <li>
            Incredible staff that will dedicate themselves to your facility
          </li>
        </Text>
      </Container>
      <Container>
        <Image src={card2} />
        <Text>
          <b>Floor and Carpet care:</b>
          <li>New flooring</li>
          <li>New Carpet</li>
          <li>Stripping and Waxing</li>
          <li>Scrub and Recoat Services</li>
          <li>Commercial Floor Cleaning</li>
          <li>Floor Maintenance Programs</li>
          <li></li>
        </Text>
      </Container>
      <Container>
        <Image src={card3} />
        <Text>
          <b>Emergency Cleaning:</b>
          <li>Water Damage</li>
          <li>Fire restoration</li>
          <li>Spots, stains and odor removal</li>
          <li>Expert carpet cleaning</li>
          <li>Hard surface floor cleaning</li>
        </Text>
      </Container>
      <Container>
        <Image src={card4} />
        <Text>
          <b>Window Cleaning:</b>
          <li>Commercial</li>
          <li>High Rise</li>
          <li>Storefront</li>
        </Text>
      </Container>
    </>
  );
};

export default MiniCard;
