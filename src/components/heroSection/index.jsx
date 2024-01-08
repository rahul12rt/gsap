import React, { useEffect, useRef } from "react";
import "./heroSection.css";
import gsap from "gsap";
import Card from "../ui/card";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeroSection(props) {
  const heroBgRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.1 });
    const eventTitle = gsap.timeline({ delay: 1.1 });
    const heroBg = gsap.timeline({ delay: 1 });
    tl.to(".welcome-text", {
      y: "-10px",
      duration: 1,
      ease: "power3.out",
      opacity: 1,
    });
    eventTitle.to(".event-title", {
      y: "-7px",
      duration: 1.2,
      ease: "power3.out",
      opacity: 1,
    });
    tl.to(".event-date", {
      duration: 1,
      ease: "power3.out",
      opacity: 1,
    });
    tl.to(".hash-tag", {
      duration: 1,
      ease: "power4.out",
      opacity: 1,
    });

    heroBg.fromTo(
      heroBgRef.current,
      { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }, // Initial clip path to hide the image (from top)
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 1 } // Final clip path to reveal the image (to bottom)
    );
  }, []);

  return (
    <>
      <div className="hero-container">
        <div className="content">
          <div>
            <div className="line-20">
              <p className="welcome-text">Welcome to</p>
            </div>
            <div className="line-130">
              <h6 className="event-title">Indegene Digital Summit 2023</h6>
            </div>
            <p className="event-date">September 21-22, 2023</p>
          </div>

          <p className="hash-tag">A #FutureReadyHealthcare initiative</p>
        </div>
        <div className="session">
          <Card name={"event-card"} />
          <div className="hero-bg" ref={heroBgRef}></div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
