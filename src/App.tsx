import "./App.css";
import Navbar from "./components/Navbar";
import Headline from "./components/Headline";
import Beer from "./components/Beer";
import styled from "styled-components";
import Waves from "./components/Waves";

const StyledApp = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledMain = styled.div`
  display: flex;
  justify-content: space-between;
  height: fit-content;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <StyledMain>
        <Headline />
        <Beer />
      </StyledMain>
      <Waves />
    </StyledApp>
  );
}

export default App;
