
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright, faEnvelope, faCalculator, faHandScissors, faUniversalAccess, faAddressCard, faEarthAmericas,faCode, faC, faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faHtml5, faCss3Alt, faJs, faReact, faPhp, faPython, faGithub, faTrello } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import emailjs from '@emailjs/browser';

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
const [selectedItem, setSelectedItem] = useState(null); // another useState hook

const [sendBtnColors, setSendBtnColors] = useState({
  backgroundColor: '',
  textColor: ''
});

useEffect(() => {
  const bodyColor = isDarkMode ? '#FFFFFF' : '#000000';
  const oppositeColor = findOppositeColor(bodyColor);

  setSendBtnColors({
    backgroundColor: oppositeColor,
    textColor: bodyColor
  });
},[isDarkMode]);

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
  setIsDarkMode(!isDarkMode);
  document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
};


const findOppositeColor = (color) => {
  // Check if the color starts with #, if it does, remove the # 
  const hexColor = color.charAt(0) === '#' ? color.substring(1) : color;
  // Convert the hexadecimal color to decimal, apply XOR operation  with 0xFFFFFF, convert back to hexadecimal,
  // and ensure the result has 6 characters by padding with '0' if needed
  const oppositeColor = (Number(`0x${hexColor}`) ^ 0xFFFFFF).toString(16).padStart(6, '0');

    // Return the opposite color with '#' added at the beginning
    return `#${oppositeColor}`;
};

const listItemClick = (item) => {
  // Toggle the visibility of the paragraph and set the selected item 
  setSelectedItem(item === selectedItem ? null : item);
};

const renderInformation = (item) => {
  switch(item) {
    case 'Education': 
      return ( 
         <div className="dropdown-content"> 
          <p>As a recent graduate from the University of North Texas
            with a Bachelor of Science degree in Computer Science, I possess both theoretical knowledge and practical experience
           in diverse programming languages, such as C++, Python, HTML, CSS, JavaScript, and PHP, providing
           a solid foundation to tackle real-world challenges.</p>
           </div>
      );
     case 'Experience':
        return ( 
           <div className="dropdown-content"> 
            <p>In the realm of practical experience, I've
               successfully completed projects showcasing my adaptability 
               and expertise in utilizing a spectrum of programming languages,
              spanning different domains, and honing my skills to deliver effective solutions.</p>
              </div>
              );
      case 'Interests':
        return ( 
          <div className="dropdown-content">
            <p>Beyond academia and profession, I'm a passionate sports enthusiast,
               particularly devoted to supporting the Dallas Mavericks in the vibrant
              Dallas/Fort Worth area, with my love for the team extending beyond the game
              and serving as a source of community and shared enthusiasm, shaping a well-rounded
              individual ready to contribute meaningfully to the dynamic world of technology.</p>
              </div>
            );
      default:
         return null;                      
  }
};

/* Testing ... TESTING...TESTING...TESTING...TESTING */
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_2lemxgm', 'contact_form', form.current, 'M4c0hQsq1fDJLThn0')
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
    }, (error) => {
        console.log(error.text);
    });
};
/* TESTING...TESTING...TESTING...TESTING...TESTING */
  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    {/*<div className="App">*/}
      <div className="nav-bar">
        <ul className="navbar-list">
          <li> <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '🌙' : '☀️'} {/* 'Light' : 'Dark' */}
          </div></li>
          <li onClick={() => scroll(about)}>About</li>
          <li onClick={() => scroll(projects)}> Projects</li>
          <li onClick={() => scroll(skills)}> Skills </li>
          <li onClick={() => scroll(contact)}> Contact </li>
        </ul>
      </div>

      <div className="main-container">
        <FontAwesomeIcon className="home-image" icon={faCode}  />
        <div className="typewriter">
          <h1 className="bounce-animation">Geary Erua</h1>
        <p className="subtitle"> <i>
        <Typewriter
          options={{
          strings: ['I Like to Code Things ☺️'],
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
                <select className={`about-list ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onChange={(e) => listItemClick(e.target.value)}>
                  <option value="" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Select an option</option> {/* To go back, change option tag to li */}
                  <option value="Education" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Education </option> {/* To go back, change option tag to li */}
                  <option value="Experience" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Experience </option> {/* To go back, change option tag to li */}
                  <option value="Interests" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Interests </option> {/* To go back, change option tag to li */}
                 {/* <li className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF'}} onClick={() => listItemClick('Interests')}> Interests <span className="addition"><FontAwesomeIcon icon={faPlus} /></span></li> */}
                </select> {/* Previously ul and li */}
                {selectedItem && (
                  <div className="rendered-information">
                    {renderInformation(selectedItem)}
                  </div>
                 )}
              </div>
              <div className="right-side">
              <FontAwesomeIcon className="about-icon" icon={faAddressCard} />
              </div>
              </div>
          </div><br/>

          <div ref={projects} className="second-section">
            <h1> Projects </h1>
            <div className="project-section">
              
              <div className="grid-item">
               <h2> Accessibility Portal </h2>
                 <FontAwesomeIcon className="project-icon" icon={faUniversalAccess} />
                 {/*<p>Designed for companies to help those having problems with accessibilities on their company applications</p>*/}
                 <p>Click <b><a className="project-link" href="https://github.com/Geary-E/Capstone-Project" target="_blank" rel="noopener noreferrer">here</a></b> to access project</p>
              </div>

              
              <div className="grid-item">
                <h2>Rock Paper Scissors</h2>
                <FontAwesomeIcon className="project-icon" icon={faHandScissors} />
                 {/*<p> Just a rock paper scissors game with a little twist</p>*/}
                 <p>Click <b><a className="project-link" href="https://github.com/Geary-E/Rock_Paper_Scissors_Game" target="_blank" rel="noopener noreferrer">here</a></b> to access project</p>
              </div>

          
              <div className="grid-item">
                <h2> Roman Numeral Converter</h2>
                <FontAwesomeIcon className="project-icon" icon={faCalculator} />
                {/*<p> A numeral converter converting numbers from 1-100.</p>*/}
                <p>Click <b><a className="project-link" href="https://github.com/Geary-E/Roman_Numeral_Converter" target="_blank" rel="noopener noreferrer">here</a></b> to access project</p>  
              </div>
              </div>
          </div>

          <div ref={skills} className="third-section">
              <h1> Skills</h1>
              <div className="skills-section">

              <div className="flex-item">  
              <h2> Front End </h2>
                <p className="p-text">HTML, CSS, JavaScript, React.js</p>
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faHtml5} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faCss3Alt} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faJs} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faReact} />
              </div>

              <div className="flex-item">
              <h2> Back End </h2>
                <p className="p-text">C/C++, PHP, Python </p>
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faC} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faPhp} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faPython} />
              </div>

              <div className="flex-item">
              <h2> Database </h2>
                <p className="p-text">MySQL </p>
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faDatabase} />
              </div>

              <div className="flex-item">
              <h2> Project Management </h2>
                <p className="p-text"> GitHub, Trello </p>
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faGithub} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faTrello} />
              </div>

              </div>
          </div>

          <div ref={contact} className="fourth-section">
              <h1> Contact </h1>
                <h3>Have Any Questions?</h3>
                <h5>Feel Free to Reach Out...</h5>
              <div className="contact-section">
                <form ref={form} onSubmit={sendEmail}>
                        <label for="name"><p className="label-text"> Name:</p><input placeholder="Name" className="input-box" type="text" name="name" /></label><br/>
                        <label for="email"><p className="label-text">Email Address:</p><input placeholder="Email" className="input-box" type="email" name="email" /></label>
                        <label for="message"><p className="label-text">Message:</p><textarea name="message" placeholder="Message"/></label><br/>
                        <button type="submit" className="form-btn"><p className="send">Send</p></button>
                  </form>
          </div>
          </div><br/><br />

          <div className="footer">
            <div className="footer-items">
            <h3><FontAwesomeIcon className="item" icon={faCopyright} /> Geary Erua 2024</h3>
              <FontAwesomeIcon title="https://www.linkedin.com/in/geary-erua/" className="item" icon={faLinkedin} />
              <FontAwesomeIcon title="geary16.erua@gmail.com" className="item" icon={faEnvelope} />
              <FontAwesomeIcon title="DFW, TX, USA" className="item" icon={faEarthAmericas} />
            </div>
          </div>

          </div>
    </div>
  );
}

export default App;
