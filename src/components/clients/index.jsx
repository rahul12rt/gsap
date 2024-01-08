import React, { useEffect } from "react";
import "./clients.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CounterAnimation from "../ui/counter";

function Clients() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(".clients-info", {
      scrollTrigger: {
        trigger: ".clients-info",
        toggleActions: "restart",
      },
      scrub: 1,
      opacity: 1,
      y: 10,
      duration: 2,
    });
    gsap.to(".count h2", {
      scrollTrigger: {
        trigger: ".count h2",
        toggleActions: "restart",
      },
      scrub: 1,
      opacity: 1,
      y: 10,
      duration: 2,
    });
  }, []);
  return (
    <div className="clients-container">
      <div className="clients-info">
        <h6>
          Indegene Digital Summit is a{" "}
          <span className="hash-tags">#FutureReadyHealthcare</span>
          initiative orchestrated by Indegene
        </h6>
      </div>
      <div className="count">
        <h2>
          <CounterAnimation startValue={25} endValue={45} />+ Speakers
        </h2>
        <h2>
          <CounterAnimation startValue={25} endValue={45} />+ Sessions
        </h2>
        <h2>
          <CounterAnimation startValue={25} endValue={45} />+ Attendees
        </h2>
      </div>
    </div>
  );
}

export default Clients;
