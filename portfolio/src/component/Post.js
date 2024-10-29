import React, { useContext, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useParams, NavLink } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE
import '../Post.css'; // .css file for Post

const Post = () => {

    const { isDarkMode } = useContext(DarkModeContext);
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [likes, setLikes] = useState(0);

    useEffect(() => {
        fetchPost();
        fetchComments();
    }, []);

    const fetchPost = async () => {
        try {
            const response = await axios.get(`https://blog-section-21b15676b1be.herokuapp.com/api/posts/${id}/`);
            setPost(response.data);
        } catch(error) {
            console.error('There was an error fetching the blog post!', error);
            console.error('Error details:', error.response || error.message);
        }
    };


    const fetchComments = async () => {
        try {
            const response = await axios.get(`https://blog-section-21b15676b1be.herokuapp.com/api/posts/${id}/comments/`);
            setComments(response.data);
        } catch(error) {
            console.error('There was an error fetching the comments!', error);
            console.error('Error details:', error.response || error.message);
        }
    };

    if(!post) {
        return <div>Loading...</div>;
    } 

    const likesButton = () => {
        //setLikes(1);
        //console.log("You got a new like!");
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

    return (
        <div className={`post-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h1 className="post-title">{post.title}</h1>
            <p className="post-content">{post.content}</p>
            <p className="post-details">Created: {new Date(post.created_at).toLocaleDateString()}</p>
            <br/>
           
            <div className="comment-section">    
                <h2 className="comment-header">Comments...</h2>
                <h4> Login or register <b>here</b> to like, comment, or reply.</h4>
                <br/>
                <div className="add-comment">
                        <NavLink className="nav-bar-link" to={`/post/${post.id}/add_comment/`}> Add Comment </NavLink><br/><br/>
                        </div>
                {  comments.length === 0 ? (
                    <div>
                        No Comments Yet... <a href="#"> Add One </a>
                    </div>
                 ) : (
                     comments.map((comment, index) => (
                        <div key={index} className="comment">
                           {/* <NavLink className="nav-bar-link" to={`/post/${post.id}/add_comment/`}> Add Comment </NavLink><br/><br/> */}
                            <strong>
                                <div className="user-name">{comment.user}: </div> </strong>
                                <p>{comment.message}</p>
                                <p> {new Date(comment.date_of_comment).toLocaleString()} </p>
                                <div className="button-list">
                                    <FontAwesomeIcon icon={faHeart} className="heart" id="heart-1" onClick={likesButton}> Like </FontAwesomeIcon>
                                    <button> Reply</button>
                                </div>
                            </div>
                 ))
                )}

            </div>

        </div>
    );
};

export default Post;