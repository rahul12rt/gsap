import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const PrimaryButton = (props) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const tl = gsap.timeline();
    tl.set(".primary", { scale: 1 });
    tl.to(".primary", {
      scale: 1,
      duration: 1,
      ease: "power3.out",
    });
    const onHover = () => {
      gsap.to(button, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    };

    const onHoverOut = () => {
      gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    button.addEventListener("mouseenter", onHover);
    button.addEventListener("mouseleave", onHoverOut);

    return () => {
      // Clean up event listeners on component unmount
      button.removeEventListener("mouseenter", onHover);
      button.removeEventListener("mouseleave", onHoverOut);
    };
  }, []);

  return (
    <button className={`primary ${props.name}`} ref={buttonRef}>
      Watch Now
    </button>
  );
};

export default PrimaryButton;
