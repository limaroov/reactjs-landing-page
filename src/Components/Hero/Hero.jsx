import styled from "styled-components";
import {
  Container,
  SectionParagraph,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";
import SweetTitle from "../SweetTitle/SweetTitle";

import bg from "../../ui_attachments/images/BG.png";
import heroStars from "../../ui_attachments/icons/hero-stars.svg";
import PurpleButton from "../PurpleButton/PurpleButton";
import heroImage from "../../ui_attachments/images/hero_image.png";

const Hero = ({ onClick }) => {
  return (
    <HeroContainer onClick={onClick}>
      <Container className="container">
        <HeroLeft>
          <SweetTitle icon={heroStars} text="v3.1 released . learn more" />
          <SectionTitle bold large width="70%" black capitalize>
            your data with real-time analytics
          </SectionTitle>
          <SectionParagraph width="60%">
            Harness the potential of Big Data Analytics & Cloud Services and
            become a data-driven organization with Needle tail
          </SectionParagraph>
          <PurpleButton title="start free trial" />
        </HeroLeft>
        <HeroRight>
          <img src={heroImage} alt="heroImage" />
        </HeroRight>
      </Container>
    </HeroContainer>
  );
};

const HeroLeft = styled.div`
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`;
const HeroRight = styled.div`
  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

const HeroContainer = styled.section`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: none;

  .container {
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media screen and (max-width: 1200px) {
    .container {
      justify-content: center;
    }
  }
`;

export default Hero;
