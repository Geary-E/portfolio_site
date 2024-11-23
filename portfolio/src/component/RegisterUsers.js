import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE
//import SignUp from './SignUp';
import '../Modal.css'; // .css file for Modal - Test run

const RegisterUsers = ({ closeModal, className }) => {    // prop: {style, closed} // testRun
    const { isDarkMode } = useContext(DarkModeContext); // test: Trial run
    return (
        <div className='registeredUsers' > 
            
            <div id="main" className={className}> {/* style={modalStyles} */} 
            <div className={`modal-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}> 
                <span className="close" onClick={closeModal}>&times;</span> 
                <h2> Login: </h2><br/>
                <input className="user" placeholder="Username" /><br/><br/>
                <input className="password" placeholder="Password" /> <br/><br/>
                <button className="submit-btn"> Submit </button><br/>
                <p> New here? Click <NavLink to={`/signup`}>here</NavLink> to sign up</p>
            </div>
            </div>
        </div>
    );

}

export default RegisterUsers;