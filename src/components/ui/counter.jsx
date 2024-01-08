import React, { useEffect, useState, useRef } from "react";

const CounterAnimation = ({ startValue, endValue }) => {
  const [count, setCount] = useState(startValue);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const targetCount = endValue;
    const duration = 1000; // Animation duration in milliseconds
    const interval = duration / (targetCount - startValue);

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Adjust the threshold based on your needs
    });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    console.log(isVisible);
    const counterAnimation = setInterval(() => {
      if (isVisible) {
        setCount((prevCount) => (prevCount + 1) % (targetCount + 1));
      }
    }, interval);

    // Cleanup: Clear the interval and unobserve on component unmount
    return () => {
      clearInterval(counterAnimation);
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible, startValue, endValue]);

  return (
    <div id="counter" className={`animated`} ref={counterRef}>
      <ul className={`digits digits-third ${isVisible ? "luckie" : ""}`}>
        {Array.from(Array(endValue - startValue + 1).keys()).map((digit) => (
          <li
            key={digit}
            className={digit + startValue === count ? "current" : ""}
          >
            {digit + startValue > 9
              ? digit + startValue
              : `0${digit + startValue}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CounterAnimation;
