import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./topics.css";
import PastSpeakers from "../pastSpeakers";
import Clients from "../clients";

const StickyComponent = () => {
  const stickyRef = useRef(null);
  const headingsRef = useRef([]);
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    gsap.registerPlugin("ScrollTrigger");

    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);

        setTimeout(() => {
          const stickySection = stickyRef.current;
          const scrollPosition = window.scrollY;
          const sectionTop = stickySection.offsetTop;
          const sectionHeight = stickySection.offsetHeight;

          if (
            scrollPosition > sectionTop - window.innerHeight &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            if (currentHeadingIndex < headingsRef.current.length) {
              const currentHeading = headingsRef.current[currentHeadingIndex];

              gsap.to(currentHeading, {
                opacity: 1,
                translateY: 0,
                duration: 0.5,
              });

              // Move previous headings upwards
              for (let i = 0; i < currentHeadingIndex; i++) {
                gsap.to(headingsRef.current[i], {
                  translateY: -40 * (currentHeadingIndex - i),
                  duration: 0.5,
                });
              }

              setCurrentHeadingIndex((prevIndex) => prevIndex + 1);
            }
          }

          setIsScrolling(false);
        }, 1000); // Adjust the delay based on your preference
      }
    };

    gsap.from(stickyRef.current, {
      scrollTrigger: {
        trigger: stickyRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Start with the first heading visible
    gsap.to(headingsRef.current[0], {
      opacity: 1,
      translateY: 0,
      duration: 0.5,
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentHeadingIndex, isScrolling]);

  return (
    <div className="session-container">
      <div
        style={{
          position: "absolute",
          zIndex: 20,
          background: "aliceblue",
          borderBottomLeftRadius: "100px",
          borderBottomRightRadius: "100px",
          boxShadow: "rgba(0, 0, 0, 0.2) 0px 10px 10px 15px",
        }}
      >
        <Clients />
      </div>
      <div
        className="session-wrap"
        ref={stickyRef}
        style={{
          position: "sticky",
          top: "0",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Vqqxsf2SZjQ?autoplay=1&loop=1&playlist=Vqqxsf2SZjQ&controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        {/* 
        <h6
          ref={(el) => (headingsRef.current[0] = el)}
          style={{
            opacity: "0",
            transform: "translateY(20)",
          }}
        >
          New
        </h6> */}
      </div>
      {/* Your content goes here */}
      <div style={{ height: "800px" }}></div>
    </div>
  );
};

export default StickyComponent;
