import styled from "styled-components";
import {
  SectionParagraph,
  SectionTitle,
  StartButton,
} from "../../GlobalStyles/globalStyles";

import google from "../../ui_attachments/icons/google.svg";

import { Input } from "../../GlobalStyles/globalStyles";

const SignUp = () => {
  return (
    <SignUpContainer>
      <SectionTitle capitalize small bold center>
        Sign Up
      </SectionTitle>
      <StartButton>Start your free trial</StartButton>
      <Input type="email" placeholder="Your primary email" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Re-type Password" />
      <SectionTitle uppercase xsmall bold center>
        OR
      </SectionTitle>
      <StartButton bg="#4285F4">
        <img src={google} alt="google icon" /> Sign In With Google
      </StartButton>
      <div className="signIn">
        <SectionParagraph>Already have an account? </SectionParagraph>
        <a href="#">Login</a>
      </div>
    </SignUpContainer>
  );
};

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
  border-radius: 8px;

  background-color: white;
  box-shadow: 3px 4px 40px -2px rgba(179, 179, 179, 0.75);
  -webkit-box-shadow: 3px 4px 40px -2px rgba(179, 179, 179, 0.75);
  -moz-box-shadow: 3px 4px 40px -2px rgba(179, 179, 179, 0.75);

  .signIn {
    display: flex;
    align-items: center;
    a {
      color: blue;
    }
  }
`;

export default SignUp;
