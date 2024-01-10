
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEarthAmericas,faCode, faC, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faHtml5, faCss3Alt, faJs, faReact, faPhp, faPython, faGithub, faTrello } from '@fortawesome/free-brands-svg-icons';
//import bgImage from './images/image1.png';
import profileImage from './images/image2.JPG';
import firstProject from './images/image3.JPG';
import secondProject from './images/image4.JPG';
import thirdProject from './images/image5.JPG';
import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';

function App() {
  
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  const scroll = (elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 50,
      behavior: 'smooth',
    });
  });

const [isDarkMode, setIsDarkMode] = useState(false);  // useState hook

useEffect(() => {
  localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
}, [isDarkMode]);

useEffect(() => {
  const darkMode = JSON.parse(localStorage.getItem('darkMode'));
  if(darkMode) {
    setIsDarkMode(darkMode);
  }
}, []);


//const darkMode = () => {
const toggleDarkMode = () => {
 // const body = document.querySelector('body');
 // body.setAttribute('data-theme', body.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  setIsDarkMode(!isDarkMode);
  document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
};
//};

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    {/*<div className="App">*/}
      <div className="nav-bar">
        <ul className="navbar-list">
          <li> <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? 'Light' : 'Dark'}
          </div></li>
          <li onClick={() => scroll(about)}>About</li>
          <li onClick={() => scroll(projects)}> Projects</li>
          <li onClick={() => scroll(skills)}> Skills </li>
          <li onClick={() => scroll(contact)}> Contact </li>
        </ul>
      </div>

      <div className="main-container">
        {/*<img className="home-image" src={bgImage} /> */}
        <FontAwesomeIcon className="home-image" icon={faCode}  />
        <div className="typewriter">
          <h1 className="bounce-animation">Geary Erua</h1>
        <p className="subtitle"> <i>
        <Typewriter
          options={{
          strings: ['Top Tier programmer ☺️'],
          autoStart: true,
          loop: true,
  }}  style={{ fontFamily: 'Arial, sans-serif' }}
/></i></p></div>
      </div><br/><br/>

      <div className="sections">
        
        <div ref={about} className="first-section">
         <h1> About </h1>
            <div className="about-section">
              <div className="left-side">
                <p>
                    As a recent graduate from the University of North Texas with
                     a Bachelor of Science degree in Computer Science, I am equipped 
                     with a solid foundation in various aspects of the field. My 
                     academic journey has not only provided me with theoretical knowledge 
                     but also practical experience through numerous projects. 
                     These projects have allowed me to delve into the intricacies of
                      diverse programming languages, including C++, Python, HTML, CSS, JavaScript, and PHP,
                       thereby enhancing my proficiency in tackling real-world challenges.</p> 
                      <p> 
                      In the realm of practical experience, I have successfully completed multiple 
                      projects that showcase my adaptability and expertise in utilizing a spectrum
                       of programming languages. These projects span across different domains,
                        illustrating my ability to apply theoretical concepts to practical scenarios. 
                        Whether it's crafting efficient algorithms in C++ or developing dynamic
                         web applications using HTML, CSS, JavaScript, and PHP, I have honed my 
                         skills to deliver effective solutions.</p> 
                         <p>
                        Beyond my academic and professional pursuits, I am also a passionate 
                        sports enthusiast, particularly devoted to supporting the Dallas Mavericks. 
                        Being situated in the vibrant Dallas/Fort Worth area has allowed me to actively
                         engage with the local sports culture. My love for the Dallas Mavericks extends 
                         beyond the thrill of the game, serving as a source of community and shared 
                         enthusiasm with fellow fans. This intersection of my academic achievements, 
                         programming expertise, and sports passion shapes a well-rounded individual 
                         ready to contribute meaningfully to the dynamic world of technology.</p> 
                        <p> 
                        In conclusion, my academic journey, diverse programming experience, 
                        and unwavering sports passion collectively define my identity as a
                         recent graduate from the University of North Texas. I am poised 
                         to embark on a fulfilling career, armed with the knowledge, skills,
                          and enthusiasm needed to make a positive impact in the ever-evolving
                           realm of computer science and technology.
                        </p>
              </div>
              <div className="right-side">
              <img src={profileImage} alt="avatar" />
              </div>
              </div>
          </div><br/>

          <div ref={projects} className="second-section">
            <h1> Projects </h1>
            <div className="project-section">
              
              <div className="grid-item">
                 <a target="_blank" rel="noopener noreferrer" href="https://github.com/Geary-E/Rock_Paper_Scissors_Game"><h2> Rock-Paper-Scissors </h2></a>
                 <p>Rock Paper Scissors Game with a little twist</p>
                <img src={secondProject} className="project-img" alt="rock-paper-scissors" />
              </div>

              
              <div className="grid-item">
                 <a href="https://github.com/Geary-E/Capstone-Project" target="_blank" rel="noopener noreferrer"><h2>Accessibility Portal</h2></a>
                 <p> Designed for companies to help those with disabilities</p>
                <img src={thirdProject} className="project-img" alt="accessibility-portal" />
              </div>

          
              <div className="grid-item">
                <a href="https://github.com/Geary-E/Roman_Numeral_Converter" target="_blank" rel="noopener noreferrer"><h2> Roman Numeral Converter</h2></a>
                <p> Converts numbers from 1-100.</p>
                <img src={firstProject} className="project-img" alt="roman numeral converter" />
              </div>
              </div>
          </div>

          <div ref={skills} className="third-section">
              <h1> Skills</h1>
              <div className="skills-section">

              <div className="flex-item">  
              <h2> Front End </h2>
                <p className="p-text">HTML, CSS, JavaScript, React.js</p>
                <FontAwesomeIcon className="font-icons" icon={faHtml5} />
                <FontAwesomeIcon className="font-icons" icon={faCss3Alt} />
                <FontAwesomeIcon className="font-icons" icon={faJs} />
                <FontAwesomeIcon className="font-icons" icon={faReact} />
              </div>

              <div className="flex-item">
              <h2> Back End </h2>
                <p className="p-text">C/C++, PHP, Python </p>
                <FontAwesomeIcon className="font-icons" icon={faC} />
                <FontAwesomeIcon className="font-icons" icon={faPhp} />
                <FontAwesomeIcon className="font-icons" icon={faPython} />
              </div>

              <div className="flex-item">
              <h2> Database </h2>
                <p className="p-text">MySQL </p>
                <FontAwesomeIcon className="font-icons" icon={faDatabase} />
              </div>

              <div className="flex-item">
              <h2> Version Control</h2>
                <p className="p-text"> GitHub </p>
                <FontAwesomeIcon className="font-icons" icon={faGithub} />
              </div>

              <div className="flex-item">
              <h2> Project Management </h2>
                <p className="p-text"> Trello </p>
                <FontAwesomeIcon className="font-icons" icon={faTrello} />
              </div> 

              </div>
          </div>

          <div ref={contact} className="fourth-section">
              <h1> Contact </h1>
                <h3>Have Any Questions?</h3>
                <h5>Feel Free to Reach Out...</h5>
              <div className="contact-section">
                  <label htmlFor="fname"> <p className="label-text">First Name:</p><input className="input-box" type="text" placeholder="First Name" /></label><br/>
                  <label htmlFor="lname"><p className="label-text">Last Name:</p><input className="input-box" type="text" placeholder="Last Name" /></label><br/>
                  <label htmlFor="email"><p className="label-text">Email Address:</p><input className="input-box" type="text" placeholder="Email" /></label><br/>
                  <label><p className="label-text">Message:</p><textarea placeholder="message"></textarea></label>
          </div>
          </div>

          <div className="footer">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faEarthAmericas} />
          </div>

          </div>
    </div>
  );
}

export default App;
