import React from "react";
import styled from "styled-components";
import card1 from "../img/card1.png";
import card2 from "../img/card2.png";
import card3 from "../img/card3.png";
import card4 from "../img/card4.png";

const Container = styled.div`
  width: 100px;
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
  margin-top: 10px;
  text-align: center;
`;

const MiniCard = () => {
  return (
    <>
      <Container>
        <Image src={card1} />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
          exercitationem est rerum soluta illo dicta asperiores eaque vero
          quaerat similique.
        </Text>
      </Container>
      <Container>
        <Image src={card2} />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
          exercitationem est rerum soluta illo dicta asperiores eaque vero
          quaerat similique.
        </Text>
      </Container>
      <Container>
        <Image src={card3} />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
          exercitationem est rerum soluta illo dicta asperiores eaque vero
          quaerat similique.
        </Text>
      </Container>
      <Container>
        <Image src={card4} />
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
          exercitationem est rerum soluta illo dicta asperiores eaque vero
          quaerat similique.
        </Text>
      </Container>
    </>
  );
};

export default MiniCard;
