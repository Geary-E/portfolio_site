
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalculator, faHandScissors, faUniversalAccess, faAddressCard, faEarthAmericas,faCode, faC, faDatabase} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faHtml5, faCss3Alt, faJs, faReact, faPhp, faPython, faGithub, faTrello } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect'; // typewriter
import emailjs from '@emailjs/browser'; // emailjs

function App() {
  
  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const contact = useRef(null);

  // For EmailJS
  const service_id = process.env.REACT_APP_EMAIL_SERVICE;
  const template_id = process.env.REACT_APP_EMAIL_TEMPLATE;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;
  // For EmailJS end

  const scroll = (elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 50, // originally - 50
      behavior: 'smooth',
    });
  });

const [isDarkMode, setIsDarkMode] = useState(false);  // useState hook
const [selectedItem, setSelectedItem] = useState(null); // another useState hook
const [activeSection, setActiveSection] = useState(null); // another useState hook


/* Use of Intesection Observer API */
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.85
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      setActiveSection(entry.target.className); // originally id
    }
  });
};

const aboutObserver = useRef(new IntersectionObserver(observerCallback, observerOptions));
const projectsObserver = useRef(new IntersectionObserver(observerCallback, observerOptions));
const skillsObserver = useRef(new IntersectionObserver(observerCallback, observerOptions));
const contactObserver = useRef(new IntersectionObserver(observerCallback, observerOptions));

useEffect(() => {
  aboutObserver.current.observe(about.current);
  projectsObserver.current.observe(projects.current);
  skillsObserver.current.observe(skills.current);
  contactObserver.current.observe(contact.current);

  return () => {
    aboutObserver.current.disconnect();
    projectsObserver.current.disconnect();
    skillsObserver.current.disconnect();
    contactObserver.current.disconnect();
  };
}, [about, projects, skills, contact]);

/* Intersection Observer API implementation end */

const toggleNav = () => {
  const navBarList = document.querySelector(".navbar-list");
    navBarList.classList.toggle('active');
}; 


/* Local storage implemented for dark mode use */
const toggleDarkMode = () => { 
  const newMode = !isDarkMode;  // new addition - test
  setIsDarkMode(newMode);
  document.body.setAttribute('data-theme', newMode ? 'dark' : 'light'); // recent addition
  localStorage.setItem('darkMode', JSON.stringify(newMode)); // Save the preference to local storage - Recent addition
};


useEffect(() => {
  const darkMode = JSON.parse(localStorage.getItem('darkMode'));
  if(darkMode !== null) {
    setIsDarkMode(darkMode);
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }
}, []); /* Local storage implementation end */


const findOppositeColor = (color) => {
  const hexColor = color.charAt(0) === '#' ? color.substring(1) : color;
  const oppositeColor = (Number(`0x${hexColor}`) ^ 0xFFFFFF).toString(16).padStart(6, '0');
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
            <p> Beyond academia and profession,
               my passion for the local Dallas Mavericks NBA team extends beyond the game,
                serving as a source of community and shared enthusiasm. 
                This, along with my love for sports, contributes to my
                 well-rounded nature, ready to meaningfully contribute to the
                  dynamic world of technology.</p>
              </div>
            );
      default:
         return null;                      
  }
};

/* Sending emails through contact section */
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(service_id, template_id, form.current, public_key)
    .then((result) => {
        console.log(result.text);
        console.log("message sent");
        alert("Message Sent!")
    }, (error) => {
        console.log(error.text);
    });
};

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    {/* Navigation bar */}
      <div className="nav-bar">
        <ul className="navbar-list">
          <li> <div className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '🌙' : '☀️'} 
          </div></li>
          <li id="about" onClick={() => { scroll(about); setActiveSection('about');}} /* Recent additions: added id */
          className={activeSection === 'about' ? 'active' : ''}>About</li>
          <li id="projects" onClick={() => { scroll(projects); setActiveSection('projects');}}
          className={activeSection === 'projects' ? 'active' : ''}> Projects</li>
          <li id="skills" onClick={() => { scroll(skills); setActiveSection('skills');}} 
          className={activeSection === 'skills' ? 'active' : ''}> Skills </li>
          <li id="contact" onClick={() => { scroll(contact); setActiveSection('contact');}} 
          className={activeSection === 'contact' ?  'active' : ''}> Contact </li>
        </ul>
      </div>{/* Navigation bar end */}
        <button className="burger-icon" onClick={toggleNav}>&#9776;</button> {/* Burger menu */}

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

      <div className="sections"> {/* The different sections of the page */}
        
        <div ref={about} className="first-section">
         <h1> About </h1>
            <div className="about-section">
              <div className="left-side">
                <select className={`about-list ${isDarkMode ? 'dark-mode' : 'light-mode'}`} onChange={(e) => listItemClick(e.target.value)}>
                  <option value="" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Select an option</option> 
                  <option value="Education" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Education </option> 
                  <option value="Experience" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Experience </option> 
                  <option value="Interests" className="list-item"  style={{ '--hover-bgcolor': findOppositeColor(isDarkMode ? '#000000' : '#FFFFFF'),'--hover-color': isDarkMode ? '#000000' : '#FFFFFF' }}>Interests </option> 
                </select> 
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
               <h2 className="grid-header"> Accessibility Portal </h2>
                 <FontAwesomeIcon className="project-icon" icon={faUniversalAccess} />
                 <p>Click <b><a className="project-link" href="https://github.com/Geary-E/Capstone-Project" target="_blank" rel="noopener noreferrer">here</a></b> to view project</p>
              </div>

              
              <div className="grid-item">
                <h2 className="grid-header">Rock Paper Scissors</h2>
                <FontAwesomeIcon className="project-icon" icon={faHandScissors} />
                 <p>Click <b><a className="project-link" href="https://github.com/Geary-E/Rock_Paper_Scissors_Game" target="_blank" rel="noopener noreferrer">here</a></b> to view project</p>
              </div>

          
              <div className="grid-item">
                <h2 className="grid-header"> Roman Numeral Converter</h2>
                <FontAwesomeIcon className="project-icon" icon={faCalculator} />
                <p>Click <b><a className="project-link" href="https://github.com/Geary-E/Roman_Numeral_Converter" target="_blank" rel="noopener noreferrer">here</a></b> to view project</p>  
              </div>
              </div>
          </div>

          <div ref={skills} className="third-section">
              <h1> Skills</h1>
              <div className="skills-section">

              <div className="flex-item">  
              <h2 id="front-end"> Front End </h2>
                <p className="p-text">HTML, CSS, JavaScript, React.js</p>
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faHtml5} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faCss3Alt} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faJs} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faReact} />
              </div>

              <div className="flex-item">
              <h2 id="back-end"> Back End </h2>
                <p className="p-text">C/C++, PHP, Python </p>
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faC} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faPhp} />
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faPython} />
              </div>

              <div className="flex-item">
              <h2 id="db"> Database </h2>
                <p className="p-text">MySQL </p>
                <FontAwesomeIcon className="font-icons bounce-animation2" icon={faDatabase} />
              </div>

              <div className="flex-item">
              <h2 id="proj"> Project Management </h2>
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
                        <label htmlFor="name"><p className="label-text"> Name:</p><input placeholder="Name" className="input-box" type="text" name="name" /></label><br/>
                        <label htmlFor="email"><p className="label-text">Email Address:</p><input placeholder="Email" className="input-box" type="email" name="email" /></label>
                        <label htmlFor="message"><p className="label-text">Message:</p><textarea name="message" placeholder="Message"/></label><br/>
                        <button type="submit" className="form-btn"><p className="send">Send</p></button>
                  </form>
          </div>
          </div><br/><br />

          <div className="footer"> {/* Footer */}
            <div className="footer-items">
            <h3>&copy;Geary Erua 2024</h3>
              <a className="item-link" href="https://www.linkedin.com/in/geary-erua/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon title="LinkedIn" className="item" icon={faLinkedin} /></a>
              <FontAwesomeIcon title="geary16.erua@gmail.com" className="item" icon={faEnvelope} />
              <FontAwesomeIcon title="Dallas/Fort Worth, TX, USA" className="item" icon={faEarthAmericas} />
            </div>
          </div>

          </div>
    </div>
  );
}

export default App;
