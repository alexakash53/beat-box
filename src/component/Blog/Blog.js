import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-area container'>
            <div className="medium-blog">
                <h2>What is context API ?</h2>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            </div>
            <div className="medium-blog">
                <h2>What is Sementc Element ?</h2>
                <p>Semantic Elements represent their meanings to both the developer and the browser. The tag in the code tells the developer and the browser what to do. It defines the different sections and layout of web pages, which makes HTML more easily understandable.In HTML, there are some semantic elements used to define when developing the frontend of the web pages.</p>
            </div>
            <div className="medium-blog">
                <h2>inline inline-block difference ?</h2>
                <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            </div>
        </div>
    );
};

export default Blog;