import styled from "styled-components";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Feature from "./components/Feature";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const IntroShape = styled.div`
  clip-path: polygon(100% 0%, 61% 0%, 33% 100%, 100% 100%);
  background-color: crimson;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
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
      </Container>
    </>
  );
};

export default App;
