import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

import navlinks from "../../data/navLinks";
import PurpleButton from "../PurpleButton/PurpleButton";

import Bounce from "react-reveal/Bounce";

const Sidebar = ({ show, setShowSidebar }) => {
  const hideSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <SidebarContainer show={show}>
      <div className="closeIcon">
        <CloseIcon className="icon" onClick={hideSidebar} />
      </div>
      <NavLinks>
        {navlinks.map((item, index) => {
          return (
            <Bounce duration={++index * 600} right>
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            </Bounce>
          );
        })}
      </NavLinks>
      <PurpleButton title="start free trial" transparent border width="100%" />
    </SidebarContainer>
  );
};

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;

  li {
    border: 1px solid var(--primary-purple);
    border-radius: 10px;
    margin: 1rem;
    padding: 1rem;
    width: 100%;

    text-align: center;
    a {
      font-size: 2rem;
      text-transform: capitalize;
      color: white;
      text-decoration: none;

      @media screen and (max-width: 700px) {
        & {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 100;
  width: 50%;
  height: 100vh;
  background-color: var(--primary-purple-dark);
  color: white;
  padding: 2rem;
  transition: all 0.3s ease-in-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  .closeIcon {
    display: flex;
    justify-content: flex-end;
    margin: 0 2rem;

    .icon {
      font-size: 3rem;
    }
  }

  @media screen and (max-width: 700px) {
    width: 70%;
    height: 100vh;

    a {
      font-size: 1.2rem;
    }
  }
`;

export default Sidebar;
