import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SpeakerCard from "../ui/speakerCard";
import SplitText from "../ui/splitText";
import PrimaryButton from "../ui/primaryButton";
import "./pastSpeakers.css";

function ScrollSection() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      <div ref={triggerRef} style={{ position: "relative" }}>
        <SplitText title={"Speakers snapshot"} name={"horizontal-scroll"} />
        <div ref={sectionRef} className="scroll-section-inner">
          <div className="scroll-section">
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
          </div>
          <div className="scroll-section">
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
          </div>
          <div className="scroll-section">
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
            <SpeakerCard />
          </div>
        </div>
        <div className="button-wrap">
          <PrimaryButton />
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
