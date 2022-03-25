import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
`;

export const SectionTitle = styled.p`
  color: ${(props) => (props.black ? "black" : "var(--primary-purple-dark)")};
  font-size: ${(props) =>
    props.xlarge
      ? "4rem"
      : props.large
      ? "3rem"
      : props.small
      ? "2rem"
      : props.xsmall
      ? "1.1rem"
      : "1rem"};
  font-weight: ${(props) => (props.bold ? "bold" : "500")};
  text-transform: ${(props) =>
    props.capitalize
      ? "capitalize"
      : props.uppercase
      ? "uppercase"
      : "lowercase"};
  width: ${(props) => (props.width ? props.width : "100%")};
  text-align: ${(props) => (props.center ? "center" : "start")};
  margin: ${(props) =>
    props.lmargin ? "2rem" : props.margin ? "1rem" : "0"} 0;
  opacity: ${(props) => (props.lowOpacity ? "0.6" : "1")};

  @media screen and (max-width: 700px) {
    & {
        width : 100%;
    }

  @media screen and (max-width: 1200px) {
    & {
      font-size: ${(props) =>
        props.xlarge
          ? "150%"
          : props.large
          ? "140%"
          : props.small
          ? "130%"
          : props.xsmall
          ? "100%"
          : "1rem"};
    }
  }
`;

export const SectionParagraph = styled.p`
  color: black;
  opacity: 0.6;
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: 1rem;
  text-align: ${(props) => (props.center ? "center" : "start")};
  font-size: ${(props) =>
    props.xlarge
      ? "4rem"
      : props.large
      ? "3rem"
      : props.small
      ? "2rem"
      : props.xsmall
      ? "1.1rem"
      : "1rem"};

  @media screen and (max-width: 1500px) {
    & {
      width: 100%;
    }
  }

  @media screen and (max-width: 1200px) {
    & {
      font-size: ${(props) =>
        props.xlarge
          ? "150%"
          : props.large
          ? "140%"
          : props.small
          ? "130%"
          : props.xsmall
          ? "100%"
          : "1rem"};
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: transparent;
  border: 1px solid lightgrey;
  outline: none;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1rem;
  margin: 0.8rem 0;

  transition: all 0.3s ease-in;

  &:focus {
    border-color: grey;
  }
`;

export const StartButton = styled.button`
  width: 100%;
  max-height: 60px;
  background-color: ${(props) =>
    props.bg ? props.bg : "var(--primary-purple)"};
  color: white;
  border: none;
  outline: none;
  padding: 1rem 0;
  border-radius: 6px;
  font-size: 1rem;
  margin: 1rem 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.bg ? props.bg : "var(--primary-purple-hover)"};
  }

  img {
    border-radius: 8px;
    margin: 0 1rem;
    width: 50px;
    background-color: white;
  }
`;
