import styled from "styled-components";

const PurpleButton = (props) => {
  return <ButtonContainer {...props}>{props.title}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  border: none;
  outline: none;
  width: ${(props) => (props.width ? props.width : "150px")};
  height: 40px;
  font-size: 1rem;
  border: ${(props) =>
    props.border ? "1px solid var(--primary-purple)" : "none"};
  border-radius: 20px;
  background-color: ${(props) =>
    props.transparent ? "transparent" : "var(--primary-purple)"};
  color: ${(props) => (props.transparent ? "var(--primary-purple)" : "white")};

  text-transform: capitalize;
  cursor: pointer;
`;

export default PurpleButton;
