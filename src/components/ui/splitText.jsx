import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const SplitText = (props) => {
  useEffect(() => {
    const selectors = [".text p", ".horizontal-scroll p"];

    selectors.forEach((selector) => {
      gsap.to(selector, {
        backgroundPositionX: "0%",
        stagger: 1,
        scrollTrigger: {
          trigger: selector,
          scrub: 1,
          start: "top center",
          end: "bottom top",
        },
      });
    });
  }, []);

  return (
    <div class={`split-container ${props?.name}`}>
      <div class={`${props?.name}`}>
        <p>{props?.title}</p>
      </div>
    </div>
  );
};

export default SplitText;
