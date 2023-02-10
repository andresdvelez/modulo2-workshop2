import React from "react";

// Components
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Grid from "./components/grid/Grid";
import MainSection from "./components/mainSection/MainSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MainSection />
      <Grid />
      <Footer />
    </>
  );
}

export default App;
