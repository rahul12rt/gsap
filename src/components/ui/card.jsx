import React, { useEffect, useRef } from "react";
import PrimaryButton from "./primaryButton";
import gsap from "gsap";

function Card(props) {
  const cardRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2 });

    tl.fromTo(
      cardRef.current,
      { y: "20%", opacity: 0 }, // Initial position set to the right
      { y: 0, duration: 1, ease: "power2.out", opacity: 1 } // Animate to the original position
    );
  }, []);
  return (
    <div className="card-container" ref={cardRef}>
      <div className="card-header">
        <h3>Thank You</h3>
        <p>Watch the session replay</p>
      </div>
      <p className="card-info">I have already registered</p>
      <PrimaryButton name={props?.name} />
    </div>
  );
}

export default Card;
