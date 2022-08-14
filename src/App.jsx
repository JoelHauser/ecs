import styled, { css } from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";
import Office from "./img/Office.jpg";
import Mop from "./components/Service"

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;
const Shape = css`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;

const IntroShape = styled.div`
  ${Shape}
  clip-path: polygon(67% 0, 100% 0, 100% 100%, 55% 100%);
`;

const FeatureShape = styled.div`
  ${Shape}
  clip-path: polygon(0 0, 55% 0, 33% 100%, 0 100%);
`;

const ServiceShape = styled.img.attrs({ src: `${Office}`})`
  ${Shape}
  clip-path: polygon(0 0, 33% 0, 33% 100%, 0 100%);
`;

const App = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <IntroShape />
      </Container>
      <Container>
        <Feature />
        <FeatureShape />
      </Container>
      <Container>
        <Mop />
        <ServiceShape />
      </Container>
    </>
  );
};

export default App;
