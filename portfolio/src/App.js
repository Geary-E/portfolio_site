
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import bgImage from './images/image1.png';
import profileImage from './images/image2.JPG';
import firstProject from './images/image3.JPG';
import secondProject from './images/image4.JPG';
import thirdProject from './images/image5.JPG';
import { useRef } from 'react';
//import ScrollButton from './ScrollButton';
import Typewriter from 'typewriter-effect';

function App() {
  
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scroll = (elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  });

  return (
    <div className="App">
      
      <div className="nav-bar">
        <ul className="navbar-list">
          <li onClick={() => scroll(about)}>About</li>
          <li onClick={() => scroll(projects)}> Projects</li>
          <li onClick={() => scroll(skills)}> Skills </li>
          <li onClick={() => scroll(contact)}> Contact </li>
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
      </div><br/><br/>

      <div className="sections">
        
        <div ref={about} className="first-section">
         <h1> About </h1>
            <div className="about-section">
              <div className="left-side">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Placerat in egestas erat imperdiet sed euismod nisi. 
                Ipsum suspendisse ultrices gravida dictum fusce. 
                Nunc mattis enim ut tellus elementum sagittis vitae et.
                  Suspendisse in est ante in nibh mauris cursus mattis molestie. </p>
                <p>
                Ut faucibus pulvinar elementum integer enim neque volutpat. 
                Eu scelerisque felis imperdiet proin. Pellentesque pulvinar pellentesque habitant morbi tristique senectus. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim.
                 Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Pharetra magna ac placerat vestibulum.
                Sit amet volutpat consequat mauris. Rhoncus est pellentesque elit ullamcorper. Orci sagittis eu volutpat odio
                 facilisis mauris sit amet. Facilisis sed odio morbi quis. Malesuada pellentesque elit eget gravida cum. 
                 Vitae ultricies leo integer malesuada nunc vel risus commodo. 
                 </p>
                 <p>
                 Tellus orci ac auctor augue mauris augue 
                 neque gravida in. Nec feugiat nisl pretium fusce id velit. 
                 Diam vel quam elementum pulvinar etiam non quam. Eleifend mi in nulla posuere 
                 sollicitudin aliquam. Lobortis elementum nibh tellus molestie nunc non blandit massa enim. 
                 Aliquam nulla facilisi cras fermentum. Enim nulla aliquet porttitor lacus luctus accumsan tortor. Tincidunt id aliquet risus feugiat. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                 Elit pellentesque habitant morbi tristique senectus. Sit amet mattis vulputate enim nulla aliquet porttitor.
                 Lobortis mattis aliquam faucibus purus in. Vitae sapien pellentesque habitant morbi tristique senectus et netus. 
                 Porttitor eget dolor morbi non arcu risus quis. Egestas diam in arcu cursus euismod quis viverra nibh cras. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Etiam erat velit scelerisque in dictum non consectetur a. Morbi tempus iaculis urna id volutpat lacus laoreet non. Gravida arcu ac tortor dignissim convallis aenean. Suspendisse in est ante in nibh mauris cursus mattis. 
                 Mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Montes nascetur ridiculus mus mauris vitae ultricies leo.
              </p>
              </div>
              <div className="right-side">
              <img src={profileImage} />
              </div>
              </div>
          </div><br/>

          <div ref={projects} className="second-section">
            <h1> Projects </h1>
            <div className="project-section">
              
              <div className="grid-item">
                 <h2> Rock-Paper-Scissors </h2> 
                 <p>Rock Paper Scissors Game with a little twist</p>
                <img src={secondProject} className="project-img" alt="rock-paper-scissors" />
              </div>

              
              <div className="grid-item">
                 <h2>Accessibility Portal</h2>
                 <p> Designed for companies to help those with disabilities</p>
                <img src={thirdProject} className="project-img" alt="accessibility-portal" />
              </div>

          
              <div className="grid-item">
                <h2> Roman Numeral Converter</h2>
                <p> Converts numbers from 1-100.</p>
                <img src={firstProject} className="project-img" alt="roman numeral converter" />
              </div>
              </div>
          </div>

          <div ref={skills} className="third-section">
              <h1> Skills</h1>
              <div className="skills-section">

              <div className="flex-item">  
              <h2> Problem Solving </h2>
                <p className="p-text">Ability to diagnose problems and solve to best of ability</p>
              </div>

              <div className="flex-item">
              <h2> Technical </h2>
                <p className="p-text">C++, C, HTML, CSS, PHP, JavaScript, Python, MySQL, Version Control, Frameworks: React.js, Node.js </p>
              </div>

              <div className="flex-item">
              <h2> Communication </h2>
                <p className="p-text">Ability to express, take in, and communicate ideas and opinions. </p>
              </div>

              <div className="flex-item">
              <h2> Teamwork </h2>
                <p className="p-text"> Ability to work with others on a team to achieve a common goal.</p>
              </div>

              <div className="flex-item">
              <h2> Website Design </h2>
                <p className="p-text"> Ability to design a website, either through programming or using a website template service.</p>
              </div> 

              </div>
          </div>

          <div ref={contact} className="fourth-section">
              <h1> Contact </h1>
              <div className="contact-section">
                <div className="contact-items">
                  <h2> Email: </h2>
                      <FontAwesomeIcon icon={faEnvelope } className="font-icons" title="geary16.erua@gmail.com" />
                  </div>
                <div className="contact-items">
                  <h2> LinkedIn </h2>
                  <a target="_blank" rel="noopener" href="https://www.linkedin.com/in/geary-erua/"><FontAwesomeIcon icon={ faLinkedin } className="font-icons"/></a>
                    {/* Insert image link here */}
                  </div>
                <div className="contact-items">
                  <h2> Based: </h2>
                    <FontAwesomeIcon icon={faEarthAmericas} className="font-icons" title="DFW Metroplex, TX, USA" />
                </div>
          </div>
          </div>

          </div>
    </div>
  );
}

export default App;
