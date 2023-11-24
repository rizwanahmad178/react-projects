import React, {Component} from 'react';
import './App.css';
import PopCharts from './components/PopChart';

class App extends Component() {
  render(){ 
  return (
    <div className="container">
      <PopCharts />
    </div>
  );
  }
}

export default App;
