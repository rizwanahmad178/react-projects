import React from "react";
import './Intro.css';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Boy from '../../img/boy.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesemoji from '../../img/glassesimoji.png';

function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
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
            <img src={Glassesemoji} alt="glassesimoji" />   
            <div style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={Crown} text1='Web' text2='Developer'/>    
            </div> 
            <div style={{top:'18.2rem', left:'2.1rem'}}>
                <FloatingDiv image={Thumbup} text1='Software' text2='Tester'/>    
            </div> 
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:'#C1F5FF', top:'17rem', width:'21rem', height:'11rem', left:'-9rem'}}></div>
      </div>
    </div>
  );
}

export default Intro;
