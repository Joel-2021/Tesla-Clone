import React, { useContext, useEffect, useRef } from "react";
import "./App.css";
//image Import
import m3 from "../assets/M3-Homepage-D.jpg";
import mS from "../assets/ms-main-hero-desktop.jpg";
const mX ="../../assets/MX-Hero-Desktop.jpg";
import mY from "../assets/model-y_R1@2.jpg";
import sP from "../assets/solar-panel-desktop.jpg";
import sR from "../assets/Homepage-SolarRoof-Desktop-Global.webp";
import mm3 from "../assets/Homepage-Model-3-LHD-Mobile.jpg";
import mmX from "../assets/Homepage-Model-X-Mobile-LHD.jpg";
import mmY from "../assets/Homepage-ModelY-LHD-Mobile.jpg";
import mmS from "../assets/Model-S-homepage-mobile.jpg";
import msP from "../assets/Homepage-SolarPanels-Mobile.webp";

import Navbar from "./components/Navbar";
import Section from "./components/Section.jsx";
import { context } from "./context";

function App() {
  const { page } = useContext(context);
  console.log(page);
  const handleScrollToSection = (ref) => {
    console.log(ref);
    const section = document.getElementById(ref);
    section.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    handleScrollToSection(page);
  }, [page]);
  return (
    <div className="h-screen bg-cover bg-center App">
      <Navbar />
      <Section img={m3} mobileImg={mm3} product="Model 3" id="model3" />
      <Section img={mS} mobileImg={mmS} product="Model S" id="modelS" />
      <Section img={mX} mobileImg={mmX} product="Model X" id="modelX" />
      <Section img={mY} mobileImg={mmY} product="Model Y" id="modelY" />
      <Section img={sR} mobileImg={sR} product="Solar Roofs" id="solarRoofs" />
      <Section img={sP} mobileImg={msP} product="Solar Panel" id="solarPanel" />
    </div>
  );
}

export default App;
