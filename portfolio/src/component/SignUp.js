import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE
import axios from 'axios';  // axios library
import '../SignUp.css';

const SignUp = () => {

    const { isDarkMode } = useContext(DarkModeContext); // dark mode
    
    const [data, setData] = useState({
        email: "",
        user_name: "",
        password: ""
    });   // useState for data

   const handleInput = (event) => {
        setData({...data, [event.target.name]: event.target.value})
   }

   const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(data);  //testing purposes
    axios.post("https://blog-section2-301885cf5d53.herokuapp.com/api/users/", data)
    .then(response => {
        console.log(response);
        alert("User created!");
   })
    .catch(err => console.log(err));
   }

    return (
        <div className={`signup-page ${isDarkMode ? 'dark mode' : 'light mode '}`}>
            <div className='signup-section'>
                <form onSubmit={handleSubmit} method="POST">
                    <h1> Create Your Account </h1>
                    <label>Email </label><br/><br/>
                    <input className="name-signup" name="email" onChange={handleInput}  placeholder="Email" required /><br/><br/>
                    <label>Username </label><br/><br/>
                    <input className="user-signup" name="user_name" onChange={handleInput}  placeholder="Username" required /><br/><br/>
                    <label>Password</label><br/><br/>
                    <input className="pass-signup" type="password" name="password" onChange={handleInput}  placeholder="Password" required /><br/><br/><br/>
                    <button className={`signup-submit ${isDarkMode ? 'dark' : 'light'}`}> Create Account </button>
                 </form>   
            </div>

        </div>
    )
}

export default SignUp;