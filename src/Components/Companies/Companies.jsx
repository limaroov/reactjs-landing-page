import styled from "styled-components";
import { Container, SectionTitle } from "../../GlobalStyles/globalStyles";

import accenture from "../../ui_attachments/images/trusted-by/accenture.svg";
import react from "../../ui_attachments/images/trusted-by/react.svg";
import airbnb from "../../ui_attachments/images/trusted-by/airbnb.svg";
import sky from "../../ui_attachments/images/trusted-by/sky.svg";

import SignUp from "../SignUp/SignUp";

const Companies = ({ onClick }) => {
  return (
    <CompaniesContainer onClick={onClick}>
      <Container className="container">
        <CompaniesSection>
          <SectionTitle small bold firstCapitalize width="60%" capitalize>
            See why the world's best companies use Qubly to truly data-driven.
          </SectionTitle>
          <p className="trusted_by">Trusted by</p>
          <CompanyContainer>
            <Company>
              <img src={accenture} alt="accenture" />
            </Company>
            <Company>
              <img src={react} alt="accenture" />
            </Company>
            <Company>
              <img src={airbnb} alt="accenture" />
            </Company>
            <Company>
              <img src={sky} alt="accenture" />
            </Company>
          </CompanyContainer>
        </CompaniesSection>
        <SignUpContainer>
          <SignUp />
        </SignUpContainer>
      </Container>
    </CompaniesContainer>
  );
};

const SignUpContainer = styled.div`
  width: 30%;

  background-color: var(--light-grey);
  padding: 1rem;

  @media screen and (max-width: 1670px) {
    width: 100%;
  }
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 30%;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Company = styled.div`
  margin: 1rem;

  img {
    width: 90%;
  }

  @media screen and (max-width: 1200px) {
    img {
      width: 90%;
    }
  }
`;

const CompaniesSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .trusted_by {
    opacity: 0.6;
    margin: 2rem 0;
  }
`;

const CompaniesContainer = styled.section`
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 1670px) {
      flex-direction: column;
    }
  }
`;

export default Companies;
