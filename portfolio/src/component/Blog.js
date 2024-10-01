import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../Blog.css';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../DarkModeContext'; // DARK MODE

const Blog = () => {
    const { isDarkMode } = useContext(DarkModeContext); // DARK MODE
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await axios.get('https://blog-section-21b15676b1be.herokuapp.com/api/posts/');
            setPosts(response.data);
        } 
        catch(error) {
            console.error('There was an error fetching the blog posts!', error);
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

