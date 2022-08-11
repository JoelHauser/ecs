import React from "react";
import styled from "styled-components";
import Bubble from "../img/Bubble.png";

const Clean = styled.img.attrs({src: `${Bubble}`})`
  width: 60px;
  height: 60px;
  opacity: 0.7;
  position: absolute;
  top: -60px;
  left: -60px;
  z-index: -1;

  animation: clean 15s linear alternate infinite;
  @keyframes clean {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Clean2 = styled.img.attrs({src: `${Bubble}`})`
  width: 60px;
  height: 60px;
  opacity: 0.7;
  position: absolute;
  top: -200px;
  left: 100px;
  z-index: -1;

  animation: clean2 15s linear alternate infinite;
  @keyframes clean2 {
    to {
      transform: translate(100vw, 100vh);
    }
  }
`;

const Clean3 = styled.img.attrs({src: `${Bubble}`})`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: 200px;
  left: -100px;
  z-index: -1;

  animation: clean3 15s linear alternate infinite;
  @keyframes clean3 {
    to {
      transform: translate(100vw, -100vh);
    }
  }
`;

const Clean4 = styled.img.attrs({src: `${Bubble}`})`
  width: 100px;
  height: 100px;
  opacity: 0.5;
  position: absolute;
  top: 460px;
  left: -50px;
  z-index: -1;

  animation: clean4 15s linear alternate infinite;
  @keyframes clean4 {
    to {
      transform: translate(100vw, -50vh);
    }
  }
`;

const AnimatedShapes = () => {
  return (
    <>
      <Clean />
      <Clean2 />
      <Clean3 />
      <Clean4 />
    </>
  );
};

export default AnimatedShapes;
