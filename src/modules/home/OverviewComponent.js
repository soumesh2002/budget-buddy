import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  font-family: Source Code Pro;
`;

const BalanceBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const AddTransaction = styled.button`
  background: black;
  color: white;
  padding: 5px 10px;
`;

const OverviewComponent = (props) => {
  return (
    <Container>
      <BalanceBox>
        Balance: ₹1000
        <AddTransaction>Add</AddTransaction>
      </BalanceBox>
    </Container>
  );
};

export default OverviewComponent;
