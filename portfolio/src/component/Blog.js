import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../Blog.css';
import { Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE

const Blog = () => {
    const { isDarkMode } = useContext(DarkModeContext); // DARK MODE
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axiosInstance.get('api/posts/');
            setPosts(response.data);
        } 
        catch(error) {
            if (error.response) {
                console.error('Server responded with an error:', error.response.data, error.response.status);
            } else if (error.request) {
                console.error('No response received from the server:', error.request);
            } else {
                console.error('Error setting up request:', error.message);
        }
    }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };
    

    return (
        <div className={`blog-section ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h1 className="lead-header"> Blog Posts </h1>
            <ul className="blog-list">
                {posts.map(post => (
                    <li key={post.id} className="blog-item">
                        <Link className="post-link" to={`/post/${post.id}`}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        {/*<p>{post.created_at}</p> */}
                        <p>Created: {formatDate(post.created_at)}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Blog;

