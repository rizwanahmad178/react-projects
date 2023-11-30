import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

function Works() {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing.
          <br />
          Labore aperiam voluptates sit eius aliquid maxime, eligendi libero!
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Labore aperiam voluptates sit eius aliquid maxime.
        </span>
        <button className="button s-button">Hire Me</button>
        <div
          className="blur"
          style={{ background: "#ABF1FF94", top: "13rem", left: "-7rem" }}
        ></div>
      </div>
      {/* Right Side */}
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="facebook" />
          </div>
          {/* backgroundCurcles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
}

export default Works;
