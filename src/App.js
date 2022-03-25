import { useState } from "react";
import styled from "styled-components";
import Companies from "./Components/Companies/Companies.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Header from "./Components/Header/Header.jsx";
import Hero from "./Components/Hero/Hero";
import Main from "./Components/Main/Main.jsx";
import Review from "./Components/Review/Review.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <AppContainer>
      <Sidebar show={showSidebar} setShowSidebar={setShowSidebar} />
      <Header setShowSidebar={setShowSidebar} />
      <Hero onClick={() => setShowSidebar(false)} />
      <Main onClick={() => setShowSidebar(false)} />
      <Review onClick={() => setShowSidebar(false)} />
      <Companies onClick={() => setShowSidebar(false)} />
      <Footer onClick={() => setShowSidebar(false)} />
    </AppContainer>
  );
}

const AppContainer = styled.main``;

export default App;
