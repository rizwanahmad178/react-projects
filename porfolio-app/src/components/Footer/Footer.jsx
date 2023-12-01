import React from 'react';
import './Footer.css';
import Wave from "../../img/wave.png";
import Twitter from "@iconscout/react-unicons-thinline/icons/uit-twitter-alt";
import Facebook from "@iconscout/react-unicons-thinline/icons/uit-facebook-f";
import Github from "@iconscout/react-unicons-thinline/icons/uit-github-alt";
function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} alt="wave" style={{width: '100%'}} />
        <div className="f-content">
            <span>rizwanrehan178@gmail.com</span>
            <div className="f-icons">
                <Twitter color="white" size='3rem'></Twitter>
                <Facebook color="white" size='3rem'></Facebook>
                <Github color="white" size='3rem'></Github>
            </div>
        </div>
    </div>
  )
}

export default Footer
