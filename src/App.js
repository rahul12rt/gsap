import Header from "./components/header";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./components/heroSection";
import KeyNoteSpeakers from "./components/keyNoteSpeakers";
import PastSpeakers from "./components/pastSpeakers";
import SessionTopics from "./components/sessionsTopics";
import Clients from "./components/clients";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <Hero />
      <SessionTopics />
      {/* <Clients /> */}
      {/* <HeroSection /> */}
      <PastSpeakers />
      <KeyNoteSpeakers />
    </div>
  );
};

export default App;
