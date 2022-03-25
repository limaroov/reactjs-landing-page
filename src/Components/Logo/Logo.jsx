import styled from "styled-components";
import logo from "../../ui_attachments/icons/Logo.svg";

const Logo = () => {
  return <LogoContainer src={logo} alt="logo" />;
};

const LogoContainer = styled.img``;

export default Logo;
