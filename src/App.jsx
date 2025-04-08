import React from "react";
import { Element } from "react-scroll"; // react-scroll kutubxonasidan Element ni import qilish
import Header from "./Components/Header";
import Main from "./Pages/Main";
import About from "./Pages/About";
import Tours from "./Pages/Tours";
import Contacts from "./Pages/Contacts";
import Footer from "./Components/Footer";
import Visits from "./Pages/Visits";
import ImageSlider from "./Pages/ImageSlider";

function App() {
  return (
    <div>
      <Header />
      <Element name="home">
      </Element>
      <Main />
      <Element name="about">
        <About />
      </Element>
     
      <Element name="tours">
        <Tours />
      </Element>
      <Visits />
      <ImageSlider />
      <Element name="contacts">
        <Contacts />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
