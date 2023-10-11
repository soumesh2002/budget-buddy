import styled from "styled-components";
import HomeComponent from "./modules/home";
import OverviewComponent from "./modules/home/OverviewComponent";
import TransactionComponent from "./modules/home/TransactionComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Source Code Pro;
`;

const Header = styled.span`
  color: black;
  font-size: 25px;
  font-weight: bold;
`;

function App() {
  return (
    <div className="App">
      <Container>
        <Header>Budget Management</Header>
        <HomeComponent />
        <OverviewComponent />
        <TransactionComponent />
      </Container>
    </div>
  );
}

export default App;
