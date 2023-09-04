import styled from "styled-components";

const StyledCard = styled.div`
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;

const Card = (props) => {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
};

export default Card;
