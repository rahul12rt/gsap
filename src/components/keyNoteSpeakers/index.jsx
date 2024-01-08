import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "../ui/splitText";
import PrimaryButton from "../ui/primaryButton";
gsap.registerPlugin(ScrollTrigger);

const KeyNoteSpeakers = () => {
  useEffect(() => {
    const black = "#0A0A0A";
    const offWhite = "#EDEEE9";

    // Save styles for the specified elements
    ScrollTrigger.saveStyles(".first, .second, .cta, .container");

    // Match media queries for different screen sizes
    ScrollTrigger.matchMedia({
      // Mobile animations
      "(max-width: 768px)": function () {
        const mobileTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".marquee",
            start: "-100% bottom",
            scrub: 1,
          },
        });

        mobileTL
          .to(".first", { duration: 2, xPercent: -100, color: offWhite })
          .to(".second", { duration: 2, xPercent: 100, color: offWhite }, "<")
          .to(".container", { duration: 0.5, backgroundColor: black }, "<")
          .to(".cta", { duration: 2, color: offWhite }, "<");
      },

      // Tablet and desktop animations
      "(min-width: 769px)": function () {
        const desktopTL = gsap.timeline({
          scrollTrigger: {
            trigger: ".marquee",
            start: "-40% bottom",
            scrub: 7,
            markers: true,
          },
        });

        desktopTL
          .to(".first", { duration: 2, xPercent: -100 })
          .to(".second", { duration: 2, xPercent: 100 }, "<")
          .to(".container", { duration: 2 }, "<")
          .to(".cta", { duration: 2 }, "<");
      },
    });

    gsap.to(".container", {
      scrollTrigger: {
        trigger: ".container",
        toggleActions: "restart",
      },
      scrub: 1,
      opacity: 1,
      y: 10,
      duration: 2,
    });
  }, []);

  return (
    <div className="container">
      <SplitText title={"Keynote Speakers"} name={"text"} />
      <div className="marquee">
        <div className="marquee__inner first">
          <span>GSAP is</span>
          <div className="marquee-wrap">
            <div className="marquee-img-wrap">
              <img src="https://digitalsummit.indegene.com/_next/image?url=https%3A%2F%2Fd2k14tloeqh93s.cloudfront.net%2Fspeaker_fbba56ab-7df0-40be-b966-f7b0ee8b1072.png&w=640&q=75"></img>
            </div>
            <div>
              <h6>Peter Schnack</h6>
              <p>
                Head of Data, Digital & Technology, SVP, Global Portfolio
                Division
              </p>
            </div>
          </div>
          <span>GSAP is</span>
          <div className="marquee-wrap">
            <div className="marquee-img-wrap">
              <img src="https://digitalsummit.indegene.com/_next/image?url=https%3A%2F%2Fd2k14tloeqh93s.cloudfront.net%2Fspeaker_fbba56ab-7df0-40be-b966-f7b0ee8b1072.png&w=640&q=75"></img>
            </div>
            <div>
              <h6>Peter Schnack</h6>
              <p>
                Head of Data, Digital & Technology, SVP, Global Portfolio
                Division
              </p>
            </div>
          </div>
        </div>
        <div className="marquee__inner second">
          <span>Svelte</span>
          <div className="marquee-wrap">
            <div className="marquee-img-wrap">
              <img src="https://digitalsummit.indegene.com/_next/image?url=https%3A%2F%2Fd2k14tloeqh93s.cloudfront.net%2Fspeaker_fbba56ab-7df0-40be-b966-f7b0ee8b1072.png&w=640&q=75"></img>
            </div>
            <div>
              <h6>Peter Schnack</h6>
              <p>
                Head of Data, Digital & Technology, SVP, Global Portfolio
                Division
              </p>
            </div>
          </div>
          <span>Svelte</span>
          <div className="marquee-wrap">
            <div className="marquee-img-wrap">
              <img src="https://digitalsummit.indegene.com/_next/image?url=https%3A%2F%2Fd2k14tloeqh93s.cloudfront.net%2Fspeaker_fbba56ab-7df0-40be-b966-f7b0ee8b1072.png&w=640&q=75"></img>
            </div>
            <div>
              <h6>Peter Schnack</h6>
              <p>
                Head of Data, Digital & Technology, SVP, Global Portfolio
                Division
              </p>
            </div>
          </div>
        </div>
        <div className="marquee__inner first">
          <span>GSAP is</span>
          <div className="marquee-wrap">
            <div className="marquee-img-wrap">
              <img src="https://digitalsummit.indegene.com/_next/image?url=https%3A%2F%2Fd2k14tloeqh93s.cloudfront.net%2Fspeaker_fbba56ab-7df0-40be-b966-f7b0ee8b1072.png&w=640&q=75"></img>
            </div>
            <div>
              <h6>Peter Schnack</h6>
              <p>
                Head of Data, Digital & Technology, SVP, Global Portfolio
                Division
              </p>
            </div>
          </div>
          <span>GSAP is</span>
          <div className="marquee-wrap">
            <div className="marquee-img-wrap">
              <img src="https://digitalsummit.indegene.com/_next/image?url=https%3A%2F%2Fd2k14tloeqh93s.cloudfront.net%2Fspeaker_fbba56ab-7df0-40be-b966-f7b0ee8b1072.png&w=640&q=75"></img>
            </div>
            <div>
              <h6>Peter Schnack</h6>
              <p>
                Head of Data, Digital & Technology, SVP, Global Portfolio
                Division
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyNoteSpeakers;
