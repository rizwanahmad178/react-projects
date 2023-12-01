import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Experience() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className='experience' id='Experience'>
      <div className="achievement">
        <div className="circle">
            2+
        </div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className="achievement">
        <div className="circle">
            10+
        </div>
        <span>projects</span>
        <span>Completed</span>
      </div>
      <div className="achievement">
        <div className="circle">
            2+
        </div>
        <span>companies</span>
        <span>work</span>
      </div>
    </div>
  )
}

export default Experience
