import styled from "styled-components";
import {
  Container,
  SectionParagraph,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";
import eyeIcon from "../../ui_attachments/icons/main-eye.svg";
import SweetTitle from "../SweetTitle/SweetTitle";

import statistics from "../../ui_attachments/icons/statistics.svg";
import code from "../../ui_attachments/icons/code.svg";
import wire from "../../ui_attachments/icons/wire.svg";

import productTeams from "../../ui_attachments/images/product_teams.png";
import engineeringTeams from "../../ui_attachments/images/engineering_teams.jpg";

import electronicCircuit from "../../ui_attachments/icons/electronic-circuit.svg";
import compass from "../../ui_attachments/icons/compass.svg";

import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";

const Main = ({ onClick }) => {
  return (
    <MainContainer onClick={onClick}>
      <Container className="container">
        <SweetTitle text="why qubly" icon={eyeIcon} />
        <SectionTitle lmargin large center bold capitalize>
          <Fade bottom>get actionable insights from Big Data in 3 steps</Fade>
        </SectionTitle>
        <SectionParagraph center width="60%">
          <Fade bottom>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
            consequuntur, eum id optio cupiditate sint animi necessitatibus vel
            ab accusamus!
          </Fade>
        </SectionParagraph>

        <InfosCards>
          <Bounce left>
            <InfoCard>
              <div>
                <img src={statistics} alt="statistics" />
              </div>
              <SectionTitle bold xsmall center capitalize>
                valuable business insights
              </SectionTitle>
              <SectionParagraph width="60%" center>
                Collect processed & cleansed data that is ready to be analyzed
                to gather valuable business insights.
              </SectionParagraph>
            </InfoCard>
          </Bounce>
          <Bounce>
            <InfoCard>
              <div>
                <img src={code} alt="code" />
              </div>
              <SectionTitle bold xsmall center capitalize>
                powerfull algorithms
              </SectionTitle>
              <SectionParagraph width="60%" center>
                With the help of powerful algorithms, quality rules &
                techniques, obtain simplified & enriched data.
              </SectionParagraph>
            </InfoCard>
          </Bounce>
          <Bounce right>
            <InfoCard>
              <div>
                <img src={wire} alt="wire" />
              </div>
              <SectionTitle bold xsmall center capitalize>
                data in real-time
              </SectionTitle>
              <SectionParagraph width="60%" center>
                Collect data in real-time from multiple channels and move it
                into a data lake, in its original format.
              </SectionParagraph>
            </InfoCard>
          </Bounce>
        </InfosCards>
        <ProductEngineeringTeamsContainer>
          <ProductEngineeringTeams>
            <Slide left>
              <div className="image_container">
                <img
                  className="image first"
                  src={productTeams}
                  alt="productTeams"
                />
              </div>
            </Slide>

            <Slide right>
              <div className="info_container">
                <SweetTitle text="for product teams" icon={electronicCircuit} />
                <SectionTitle bold small margin capitalize>
                  launch with the best stack
                </SectionTitle>
                <SectionParagraph width="50%">
                  A centralized platform that integrates zillions of data
                  sources using Big Data ELT (Extract, Load & Transform) that
                  leaves no data behind
                </SectionParagraph>
              </div>
            </Slide>
          </ProductEngineeringTeams>
          <ProductEngineeringTeams reverse>
            <Slide left>
              <div className="image_container">
                <img
                  className="image second"
                  src={engineeringTeams}
                  alt="engineeringTeams"
                />
              </div>
            </Slide>

            <Slide right>
              <div className="info_container">
                <SweetTitle text="for engineering teams" icon={compass} />
                <SectionTitle bold small align="end" margin capitalize>
                  data-driven pipelines in minutes
                </SectionTitle>
                <SectionParagraph width="50%">
                  Maintenance-free data pipelines with quick set-up and
                  straight-forward deployments that are powered by a modern &
                  scalable platform.
                </SectionParagraph>
              </div>
            </Slide>
          </ProductEngineeringTeams>
        </ProductEngineeringTeamsContainer>
      </Container>
    </MainContainer>
  );
};

const ProductEngineeringTeamsContainer = styled.div`
  margin-top: 5rem;
  padding-top: 5rem;
`;

const ProductEngineeringTeams = styled.div`
  margin: 4rem 0;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-around;
  align-items: center;

  div {
    flex-basis: 50%;
  }
  .image_container {
    padding: 0 3rem;
    display: flex;
    justify-content: flex-end;
  }
  .info_container {
    display: flex;
    flex-direction: column;
  }

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    .image_container {
      img.first {
        width: 300px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    flex-wrap: wrap;
    .image_container {
      img.second {
        width: 400px;
      }
    }
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    justify-center: center;
    align-items: center;

    img {
      width: 50px;
    }
  }
`;

const InfosCards = styled.div`
  display: flex;
  margin-top: 4rem;

  @media screen and (max-width: 1200px) {
    & {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

const MainContainer = styled.main`
  min-height: 100vh;
  padding-top: 6rem;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Main;
