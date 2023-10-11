import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 10px;
  font-family: Source Code Pro;
`;

const OverviewComponent = (props) => {
  return <Container>Overview Component</Container>;
};

export default OverviewComponent;
