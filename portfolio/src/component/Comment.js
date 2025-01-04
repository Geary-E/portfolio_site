import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE
import axios from 'axios';
//import getCsrfToken from '../getCsrfToken';
import '../Comment.css'; // .css file for Comment
// http://localhost:8000/api/posts/${id}/comments/


const Comment  = () => {

    const { isDarkMode } = useContext(DarkModeContext);
    const { id } = useParams();
    const [data, setData] = useState({
       // user: "", : Trial run
      // user: "",    // trial run--most recent
        message: ""
    }); 

   // const [csrfToken, setCsrfToken] = useState("");

   // useEffect(() => {
     //   const fetchCsrfToken = async () => {
       //     const token = await getCsrfToken();
         //   setCsrfToken(token);
       // };
       // fetchCsrfToken();
   // }, []);

    const handleChange = (e) => {
        const value = e.target.value;

        setData({
            ...data,
            [e.target.name]: value
        });

    };

    const handleSubmit = async (event) => {
        event.preventDefault();

       // const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;

        const commentData = {
           //id: commentData.id,
           // user: data.user,  // trial run---most recent 
            message: data.message
        }; 

    
        console.log('Submitting data:', commentData);
       // console.log('CSRF Token:', csrfToken);

        axios.post(`https://blog-section2-301885cf5d53.herokuapp.com//api/posts/${id}/comments/create/`, commentData)
        .then((response) => {
            console.log(response);
            alert("Comment created!");
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log("server error");
              } else if (error.request) {
                console.log("network error");
              } else {
                console.log(error);
              }
        });
    }; 


    return (
        <div className={`add-comment ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <form onSubmit={handleSubmit} method="POST">  
            <h1 className="comment-header"> Add Comment </h1>
            {/* <label> 
                 Username: <br /><br />
                <input className="username" type="text" name="user" value={data.user} placeholder="username" onChange={handleChange} /> 
            </label><br /> */}
            <br />

            <label> 
                Message: <br /><br />
                <textarea name="message" placeholder="message" value={data.message} onChange={handleChange} /> {/*commentData.message */}
            </label><br /><br /><br/>

            <button className="submit"> Submit </button>
           </form> 
        </div>
    )

};


export default Comment;