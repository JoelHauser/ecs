import React from "react";
import styled from "styled-components";
import Mop from "../img/Mop.png";

const Container = styled.div`
  display: flex;
`;
const Right = styled.div`
  width: 50%;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  position: absolute;
  z-index: 1;
  transform: translate3d(26%, 25%, 0) scale(.8);
`;

const Service = () => {
  return (
    <Container>
      <Left>
        <Image src={Mop} />
      </Left>
      <Right></Right>
    </Container>
  );
};

export default Service;
