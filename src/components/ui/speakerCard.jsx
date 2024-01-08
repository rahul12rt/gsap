import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SpeakerCard = () => {
  const speakerRef = useRef(null);
  // useEffect(() => {
  //   const tl = gsap.timeline({ paused: true });
  //   tl.to(".name", {
  //     y: "-4px",
  //     duration: 1.6,
  //     ease: "power3.out",
  //     opacity: 1,
  //   });
  //   tl.to(".details", {
  //     y: "-4px",
  //     duration: 1.6,
  //     ease: "power3.out",
  //     opacity: 1,
  //   });
  //   tl.to(".place", {
  //     y: "-4px",
  //     duration: 1.6,
  //     ease: "power3.out",
  //     opacity: 1,
  //   });

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           tl.play();
  //         } else {
  //           tl.reverse();
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Adjust threshold as needed
  //   );

  //   observer.observe(speakerRef.current);

  //   // Clean up the observer when the component is unmounted
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  return (
    <div className="speaker-card-container">
      <div className="speaker-img-wrap" ref={speakerRef}>
        <img src="https://digitalsummit.indegene.com/_next/image?url=https%3A%2F%2Fd2k14tloeqh93s.cloudfront.net%2Fspeaker_c9b6f5fe-da54-4367-89f5-95b20d07edc9.jpg&w=640&q=75" />
      </div>

      <p className="name">Mark Materacky</p>

      <p className="details">VP, Consumer Marketing</p>

      <p className="place">Novo Nordisk</p>
    </div>
  );
};

export default SpeakerCard;
