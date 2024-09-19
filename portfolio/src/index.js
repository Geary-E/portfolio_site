import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Blog from './component/Blog';
import Post from './component/Post';
import Comment from './component/Comment';
import reportWebVitals from './reportWebVitals';
import { DarkModeProvider } from './DarkModeContext'; // Import the provider - TEST


const router = createBrowserRouter([
{
  path: '/',
  element: <App/>,
  errorElement: <div>404 Not Found</div>
},
{
  path: '/blog',
  element: <Blog />
},
{
  path: '/post/:id', // route for individual post 
  element: <Post />
},
{ path: '/:post/:id/add_comment', // route for individual post
  element: <Comment />
},
]); // recent addition

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeProvider> {/* TEST */}
      <RouterProvider router={router} /> {/* Recent additions */}
    </DarkModeProvider> {/* TEST */}
     {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
