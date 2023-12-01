import React from "react";
import "./Intro.css";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import LinkedIn from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import Glassesemoji from "../../img/glassesimoji.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";

function Intro() {
  const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Rizwan Ahmad</span>
          <span>
            Frontend Developer with experience in web development, producting
            the Quality work
          </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <a href="https://github.com/rizwanahmad178">
            <img src={Github} alt="Github" />
          </a>
          <a href="https://www.linkedin.com/in/rizwan-ahmad-9b1766181/">
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={Boy} alt="boy" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={Glassesemoji}
          alt="glassesimoji"
        />
        <motion.div 
        initial={{ top: "-4%", left: "80%" }}
        whileInView={{ left: "68%" }}
        transition={transition}
        style={{ top: "-4%", left: "68%" }}
        className="floating-div"
        >
          <FloatingDiv image={Crown} text1="Web" text2="Developer" />
        </motion.div>
        <motion.div 
        initial={{ top: "18.2rem", left: "9rem" }}
        whileInView={{ left: "2.1rem" }}
        transition={transition}
        style={{ top: "18.2rem", left: "2.1rem" }}
        className="floating-div"
        >
          <FloatingDiv image={Thumbup} text1="Software" text2="Tester" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Intro;
