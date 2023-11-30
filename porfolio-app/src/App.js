import './App.css';
import Services from './servicePage/Services';
import Intro from './components/intro/Intro';
import Navbar from './components/navbar/Navbar';
import Experience from './components/Experience/Experience';
import Works from './components/Works/Works';
import Portfolio from './components/Portfolio/Portfolio';
import Testimonial from './components/Testimonials/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
