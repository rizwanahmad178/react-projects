import React from "react";
import "./Services.css";
import HeartEmoji from "../img/heartemoji.png";
import Glasses from "../img/glasses.png";
import Humble from "../img/humble.png";
import Card from "../components/Card/Card";
import Resume from './Rizwan_CV.pdf';
import { themeContext } from '../Context';
import { useContext } from 'react';
import { motion } from "framer-motion";

function Services() {

  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* {Left Side} */}
      <div className="awesome">
        <span style={{color:darkMode?'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Labore aperiam voluptates sit eius aliquid maxime, eligendi libero!
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur" style={{ background: "#ABF1FF94", top: "13rem", left: "-7rem" }}></div>
      </div>
      {/* Right Side */}
      <div className="cards">
        {/* First Card */}
        <motion.div 
        initial={{ left: "28rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}
        style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Adobe XD"}
          />
        </motion.div>
        {/* Second Card */}
        <motion.div 
        initial={{ left: "-11rem", top: "12rem" }}
        whileInView={{ left: "-4rem" }}
        transition={transition}
        style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, CSS, JavaScript, ReactJS, Java"}
          />
        </motion.div>
        {/* Third Card */}

        <motion.div 
        initial={{ left: "25rem", top: "18rem" }}
        whileInView={{ left: "12rem" }}
        transition={transition}
        style={{ top: "19rem", left: "12rem" }}>
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={"Lorem ipsum dolor sit amet consectetur adipisicing elit.!"}
          />
        </motion.div>
        <div className="blur" style={{background: "var(--purple", top: "8rem", left: "14rem"}}></div>
      </div>
    </div>
  );
}

export default Services;
