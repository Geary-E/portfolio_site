import React, {useState, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE
import axios from 'axios';  // axios library
import Cookies from 'js-cookie';    // JS-Cookie
import '../Modal.css'; // .css file for Modal - Test run

const RegisterUsers = ({ closeModal, className }) => {    
    const { isDarkMode } = useContext(DarkModeContext); // dark mode
    

   const [values, setValues] = useState({   // values for password
        user_name: "",
        password: ""
   });

   const handleChange = (event) => {
        setValues({...values, [event.target.name]: event.target.value })
   }

   const handleSubmit = async (event) => {  // handle form submit function
        event.preventDefault(); 
        const csrfToken = Cookies.get("csrftoken"); // CSRF token
        if (!csrfToken) {
            console.error("CSRF token not found in cookies.");
            return;
        }

        try {
            const response = await axios.post("https://blog-section2-301885cf5d53.herokuapp.com/api/login/", values, {
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken,
                },
                withCredentials: true,
            });
            console.log(response.data);
            alert("Login successful!");
            //console.log("Login successful!")
        } catch (error) {
            console.error(error);
            alert("Login failed. Please check your credentials.");
        }
        console.log("Form submitted!")
   }

    return (
        <div className='registeredUsers' > 
            
            <div id="main" className={className}> {/* style={modalStyles} */} 
            <div className={`modal-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}> 
                <form onSubmit={handleSubmit}>
                    <span className="close" onClick={closeModal}>&times;</span> 
                    <h2> Login: </h2><br/>
                    <input className="user" name="user_name" value={values.user_name} placeholder="Username" onChange={handleChange} required /><br/><br/>
                    <input className="password" type="password" name="password" value={values.password} placeholder="Password" onChange={handleChange} required /> <br/><br/>
                    <button className="submit-btn"> Submit </button><br/>
                    <p> New here? Click <NavLink to={`/signup`}>here</NavLink> to sign up</p>
                    </form>
            </div>
            </div>
        </div>
    );

}

export default RegisterUsers;