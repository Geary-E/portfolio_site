
import './App.css';
import bgImage from './images/image1.png';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      
      <div className="nav-bar">
        <ul className="navbar-list">
          <li><a href="#">About</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div className="main-container">
        <img className="home-image" src={bgImage} />
        <div className="typewriter">
        <Typewriter
          options={{
          strings: ['Hello, my name is Geary Erua', 'and I am a Software Developer', 'Feel free to check out my website'],
          autoStart: true,
          loop: true,
  }}
/></div>
      </div>
    </div>
  );
}

export default App;
