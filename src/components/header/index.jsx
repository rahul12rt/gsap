import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./header.css";
import PrimaryButton from "../ui/primaryButton";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.set(".header", { y: "-100%", opacity: 0 });
    tl.to(".header", {
      y: "0%",
      duration: 1.8,
      ease: "power3.out",
      opacity: 1,
    });
  }, []);

  return (
    <header className="header">
      <img
        className="logo"
        src="https://indegene-digital-summit-storage-417a559c120451-staging.s3.amazonaws.com/public/appbar/indegene-logo.svg"
        alt="indegene-logo"
      />
      <nav className="menu">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Speaker</a>
          </li>
          <li>
            <a href="#">Agenda</a>
          </li>
          <PrimaryButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
