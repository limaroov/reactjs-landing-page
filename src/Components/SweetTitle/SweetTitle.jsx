import styled from "styled-components";

const SweetTitle = ({ icon, text }) => {
  return (
    <SweetTitleContainer>
      <img src={icon} alt="icon" />
      {text}
    </SweetTitleContainer>
  );
};

const SweetTitleContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--sweet-color);
  padding: 10px;
  border-radius: 20px;
  color: var(--primary-purple);
  text-transform: capitalize;
  width: 300px;

  img {
    margin: 0 10px;
    width: 20px;
  }
`;

export default SweetTitle;
