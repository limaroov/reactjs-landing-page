import styled from "styled-components";
import {
  Container,
  SectionParagraph,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";

import reviewBg from "../../ui_attachments/images/review-bg.png";
import reviewProfile from "../../ui_attachments/images/review-profile.jpg";

import brands from "../../data/brands";

import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Review = ({ onClick }) => {
  return (
    <ReviewContainer onClick={onClick}>
      <Container className="container">
        <SectionParagraph center small>
          <Fade bottom>
            "What I love about Qubly is the easy way we can collaborate even if
            there is a lot of people involved in the process"
          </Fade>
        </SectionParagraph>
        <Zoom bottom>
          <img src={reviewProfile} alt="" />
        </Zoom>
        <SectionTitle xsmall bold center margin capitalize>
          <Fade bottom>guillaume cabane</Fade>
        </SectionTitle>
        <SectionTitle xsmall bold center capitalize>
          <Fade bottom>CTO @ bigSpring</Fade>
        </SectionTitle>
        <Brands>
          {brands.map((brand, index) => {
            return (
              <Fade right duration={++index * 500}>
                <Brand key={index}>
                  <img src={brand.logo} alt={brand.text} />
                  {index === 1 ? (
                    <SectionTitle capitalize bold small>
                      {brand.text}
                    </SectionTitle>
                  ) : (
                    <SectionTitle lowOpacity capitalize bold small>
                      {brand.text}
                    </SectionTitle>
                  )}
                </Brand>
              </Fade>
            );
          })}
        </Brands>
      </Container>
    </ReviewContainer>
  );
};

const Brand = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 50px;
    margin: 0 1rem;
  }

  @media screen and (max-width: 1200px) {
    margin: 1rem 0;
  }
`;

const Brands = styled.div`
  margin: 2rem 0;
  padding: 2rem 0;
  width: 100%;
  border-top: 2px solid lightgrey;

  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ReviewContainer = styled.div`
  min-height: 80vh;
  background-image: url(${reviewBg});
  background-position: center;
  background-size: cover;
  background-repeat: none;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  padding-top: 8rem;
`;

export default Review;
