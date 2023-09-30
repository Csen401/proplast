import styled from "styled-components";
import Header from "./components/Banner/Header";
import ProfComponent from "./components/Banner/ProfComponent";
import Clients from "./components/Clients/Clients";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import Services from "./components/Service/Services";
function App() {
  return (
    <Container>
      <Banner>
        <Header />
        <ProfComponent />
      </Banner>
      <Services />
      <LightColor>
        <Projects />
      </LightColor>
      <LightColor>
        <Footer />
      </LightColor>
      {/* <Clients></Clients> */}
    </Container>
  );
}

export default App;

const Container = styled.div``;
const Banner = styled.div`
  background-image: linear-gradient(to left, #404040, #6b6b6b, #9a9a9a, #cbcbcb, #ffffff);
  height: 100vh;
  @media (max-width: 640px) {
    height: 100%;
    padding-bottom: 2rem;
  }
  // da home
`;

const LightColor = styled.div`
background-image: linear-gradient(to left, #404040, #6b6b6b, #9a9a9a, #cbcbcb, #ffffff);
  // da recent projects
`;
