import React from "react";
import styled from "styled-components";

const Container = styled.div`
width: 100px;
padding: 20px;
display: flex;
flex-direction: column;
`

const Image = styled.img`
    width: 20px;
`

const Text = styled.span`
    
`

const MiniCard = () => {
  return (
    <Container>
      <Image />
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
        exercitationem est rerum soluta illo dicta asperiores eaque vero quaerat
        similique.
      </Text>
    </Container>
  );
};

export default MiniCard;
