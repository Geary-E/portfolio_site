import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE
import RegisteredUsers from './RegisterUsers';
import axiosInstance from '../axiosInstance';
import '../Post.css'; // .css file for Post
import '../Modal.css'; // .css file for Modal - Test run

const Post = () => {

    const { isDarkMode } = useContext(DarkModeContext);
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [user, setUser] = useState([]);   
    const [likes, setLikes] = useState(0);
    const [modal, setModal] = useState(false);
   

    useEffect(() => {
        fetchPost();
        fetchComments();
        fetchUsers();   
    }, []);

    useEffect(() => {
        console.log("Comments:", comments);
        console.log("Users:", user);
    }, [comments, user]);

    const fetchPost = async () => {
        try {
            const response = await axiosInstance.get(`api/posts/${id}/`);
            setPost(response.data);
        } catch(error) {
            console.error('There was an error fetching the blog post!', error);
            console.error('Error details:', error.response || error.message);
        }
    };


    const fetchComments = async () => {
        try {
            const response = await axiosInstance.get(`api/posts/${id}/comments/`);
            setComments(response.data);
        } catch(error) {
            console.error('There was an error fetching the comments!', error);
            console.error('Error details:', error.response || error.message);
        }
    };

   
    const fetchUsers = async () => {    // fetch users function
        try {
            const response = await axiosInstance.get('api/users/');
            setUser(response.data);
        } catch(error) {
            console.error('There was an error fetching the users!', error);
            console.error('Error details:', error.response || error.message);
        }
    } 

    if(!post) {
        return <div>Loading...</div>;
    } 

    const likesButton = () => {
        if(!likes) {
            document.getElementById("heart-1").style.color = "red";
            setLikes(1);
            console.log(`Likes: ${likes}`);
            }
        else {
            setLikes(0);
            document.getElementById("heart-1").style.color = "var(--body_color)";
            console.log(`Likes: ${likes}`);
        }        
    };

   /* let myStyles = { 
        display: 'block' 
       /* z-index: '2', */
   /* }; */   

    const openModal = () => {
        setModal(true);
       // myStyles.display = 'block';
        console.log(`Modal: ${modal}`);
        if(modal) {
            console.log("Registered Users is showing...");
        } 
    }

    const closedModal = () => {     // trial run...
        setModal(false);
       // myStyles.display = 'none';
        console.log(`Modal: ${modal}`);
        console.log('Modal is closing...'); // trial run
    }   // trial run ... 



    return (
        <div className={`post-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-content">{post.content}</p>
            <p className="post-details">Created: {new Date(post.created_at).toLocaleDateString()}</p>
            <br/>
           
            <div className="comment-section">    
                <h2 className="comment-header">Comments...</h2>
                <h4> Login or register <b><button className="login-btn" onClick={openModal}> here </button></b> to like, comment, or reply.</h4>
                <br/>
                <RegisteredUsers className={modal ? 'modal-visible' : 'modal-invisible'} closeModal={closedModal}/> {/* style={myStyles}}: Trial run */} 
                <div className="add-comment">
                        <NavLink className="nav-bar-link" to={`/post/${post.id}/add_comment/`}> Add Comment </NavLink><br/><br/>
                        </div>
                {  comments.length === 0 ? (
                    <div>
                        No Comments Yet... <a href="#"> Add One </a>
                    </div>
                 ) : (
                     comments.map((comment, index) => {

                        console.log("User array: ", user);  // test
                        
                        const userLookup = user.reduce((map, u) => {
                            map[u.id] = u.user_name;
                            return map;
                        }, {}); 

                        //console.log("UserLookup: ", JSON.stringify(userLookup, null, 2));    // testing
                        console.log("Comment username: ", comment.user);

                        return (
                            <div key={index} className="comment">
                                {/* console.log(comment) */}
                                {/* <NavLink className="nav-bar-link" to={`/post/${post.id}/add_comment/`}> Add Comment </NavLink><br/><br/> */}
                                <strong>
                                    <div className="user-name">{userLookup[comment.user] || "Unknown user"}: </div> 
                                    </strong> {/* comment.user */}
                                <p>{comment.message}</p>
                                <p> {new Date(comment.date_of_comment).toLocaleString()} </p>
                                <div className="button-list">
                                <FontAwesomeIcon icon={faHeart} className="heart" id="heart-1" onClick={likesButton}> Like </FontAwesomeIcon>
                                <button> Reply</button>
                                </div>
                            </div>
                        );
})
                )}

            </div>

        </div>
    );
};

export default Post;