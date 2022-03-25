import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

import { Container } from "../../GlobalStyles/globalStyles";
import Logo from "../Logo/Logo";

import navlinks from "../../data/navLinks";
import PurpleButton from "../PurpleButton/PurpleButton";

const Header = ({ setShowSidebar }) => {
  const showSideBar = () => {
    setShowSidebar(true);
  };
  return (
    <HeaderContainer>
      <Container className="container">
        <Logo />
        <div className="right">
          <NavLinks>
            {navlinks.map((item, index) => {
              if (item.subLinks) {
                return (
                  <li key={index}>
                    <a href={item.href}>{item.title} &#8964;</a>
                  </li>
                );
              }
              return (
                <li key={index}>
                  <a href={item.href}> {item.title} </a>
                </li>
              );
            })}
            <PurpleButton title="start free trial" transparent border />
          </NavLinks>
          <MenuIcon className="menu_icon" onClick={showSideBar} />
        </div>
      </Container>
    </HeaderContainer>
  );
};

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0 3rem;

  li {
    margin: 0 2rem;

    a {
      text-decoration: none;
      text-transform: capitalize;
      display: flex;
      align-items: center;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    li {
      margin: 0 1rem;
    }
  }
`;

const HeaderContainer = styled.header`
  z-index: 99;
  height: 80px;
  padding-top: 1rem;
  max-width: 100%;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right {
      display: flex;
      align-items: center;

      .menu_icon {
        font-size: 3rem;
        margin: 0 2rem;
        display: none;

        @media screen and (max-width: 1000px) {
          & {
            display: block;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    position: fixed;
    width: 100%;

    background-color: var(--light-grey);
  }
`;

export default Header;
