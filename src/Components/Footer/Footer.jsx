import styled from "styled-components";
import {
  Container,
  Input,
  SectionParagraph,
  StartButton,
} from "../../GlobalStyles/globalStyles";
import Logo from "../Logo/Logo";

const Footer = ({ onClick }) => {
  return (
    <FooterContainer onClick={onClick}>
      <Container className="container">
        <div>
          <Logo />
          <SectionParagraph width="90%">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            doloremque necessitatibus fuga vitae architecto quaerat nobis
            similique? Omnis, distinctio quae?
          </SectionParagraph>
        </div>
        <div className="ul_lists">
          <ul>
            <li className="ul_title">product</li>
            <li>
              <a href="/">connections</a>
            </li>
            <li>
              <a href="/">protocols</a>
            </li>
            <li>
              <a href="/">personas</a>
            </li>
            <li>
              <a href="/">integrations</a>
            </li>
            <li>
              <a href="/">catalog</a>
            </li>
            <li>
              <a href="/">pricing</a>
            </li>
            <li>
              <a href="/">security</a>
            </li>
            <li>
              <a href="/">GDPR</a>
            </li>
          </ul>
          <ul>
            <li className="ul_title">for developers</li>
            <li>
              <a href="/">Docs</a>
            </li>
            <li>
              <a href="/">api</a>
            </li>
            <li>
              <a href="/">open source</a>
            </li>
            <li>
              <a href="/">engineering team</a>
            </li>
          </ul>
          <ul>
            <li className="ul_title">company</li>
            <li>
              <a href="/">careers</a>
            </li>
            <li>
              <a href="/">blog</a>
            </li>
            <li>
              <a href="/">press</a>
            </li>
          </ul>

          <ul>
            <li className="ul_title">support</li>
            <li>
              <a href="/">help center</a>
            </li>
            <li>
              <a href="/">contact us</a>
            </li>
            <li>
              <a href="/">security</a>
            </li>
            <li>
              <a href="/">bulletins</a>
            </li>
            <li>
              <a href="/">documentation</a>
            </li>
            <li>
              <a href="/">partner</a>
            </li>
            <li>
              <a href="/">portal</a>
            </li>
          </ul>

          <ul>
            <li className="ul_title">newsletter</li>
            <Input type="email" placeholder="Email" />
            <StartButton>Subscribe</StartButton>
          </ul>
        </div>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  color: var(--primary-purple-dark);

  .container {
    min-height: 60vh;
    padding: 4rem 2rem;
    display: flex;
    
    .ul_lists{
        display:flex;
    }

    ul {
      text-transform: capitalize;
      list-style: none;
      width: 50%;
      margin: 0 1rem;
      padding: 1rem;

      li {
        margin: 1rem 0;

        a {
          text-decoration: none;
          color: var(--primary-purple-dark);
¡        }
      }

      .ul_title {
        font-weight: bold;
        font-size: 1.2rem;
        border-bottom : 1px solid var(--primary-purple-dark);
      }
    }

    @media screen and (max-width: 1580px) {
        flex-direction : column;
        align-items: center;

        ul{
            width: 100%;

        }

        .ul_lists{
            flex-wrap :wrap;
            justify-content:center;
            
        }

      }


  }


  
`;

export default Footer;
