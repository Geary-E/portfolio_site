import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE
import axios from 'axios';  // axios library
import '../SignUp.css';

const SignUp = () => {

    const { isDarkMode } = useContext(DarkModeContext); // dark mode
    //const [data, setData] = useState([]);   // useState for data

    //const submit = () => {

      //  axios.post()
    //}

    return (
        <div className={`signup-page ${isDarkMode ? 'dark mode' : 'light mode '}`}>
            <div className='signup-section'>
                <h1> Create Your Account </h1>
                <label>Email </label><br/><br/>
                <input className="name-signup" name="email" placeholder="Email" /><br/><br/>
                <label>Username </label><br/><br/>
                <input className="user-signup" name="username" placeholder="Username" /><br/><br/>
                <label>Password</label><br/><br/>
                <input className="pass-signup" name="password" placeholder="Password" /><br/><br/><br/>
                <button className={`signup-submit ${isDarkMode ? 'dark' : 'light'}`}> Create Account </button>
            </div>

        </div>
    )
}

export default SignUp;