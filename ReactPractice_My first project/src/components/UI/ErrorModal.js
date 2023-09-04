import styled from "styled-components";
import Card from "./Card";
import Button from "./Button";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const StyledCard = styled(Card)`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    .modal {
      left: calc(50% - 20rem);
      width: 40rem;
    }
  }
`;

const StyledHeader = styled.header`
  background: #4f005f;
  padding: 1rem;

  & h2 {
    margin: 0;
    color: white;
  }
`;

const ErrorMsg = styled.div`
  padding: 1rem;
`;

const StyledFooter = styled.footer`
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
`;

const ErrorModal = (props) => {
  return (
    <div>
      <Backdrop onClick={props.onConfirm} />
      <StyledCard>
        <StyledHeader>
          <h2>{props.title}</h2>
        </StyledHeader>
        <ErrorMsg>
          <p>{props.message}</p>
        </ErrorMsg>
        <StyledFooter>
          <Button onClick={props.onConfirm}>Okay</Button>
        </StyledFooter>
      </StyledCard>
    </div>
  );
};

export default ErrorModal;
