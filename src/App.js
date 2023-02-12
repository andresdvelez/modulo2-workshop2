import React from "react";

// Components
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import MainSection from "./components/mainSection/MainSection";
import Footer from "./components/footer/Footer";
import MobileMenu from "./components/mobileMenu/MobileMenu";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <div className="main__container">
        <MainSection />
        <Grid />
      </div>
      <Footer />
    </div>
  );
}

export default App;
