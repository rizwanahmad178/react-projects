import React from 'react';
import './Toggle.css';
import ToggleOn from '@iconscout/react-unicons-thinline/icons/uit-toggle-on';
import ToggleOff from '@iconscout/react-unicons-thinline/icons/uit-toggle-off';
import { themeContext } from '../../Context';
import { useContext } from 'react';

function Toggle() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick= () =>{
    theme.dispatch({type: 'toggle'})
  }

  return (
    <div className='toggle' onClick={handleClick}>
      <ToggleOn/>
      <ToggleOff/>
      <div 
        className="t-button"
        style={darkMode? {left:'2px'} : {right:'2px'}}
      >
        
      </div>
    </div>
  )
}

export default Toggle
