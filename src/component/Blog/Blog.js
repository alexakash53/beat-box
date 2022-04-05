import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-area container'>
            <div className="medium-blog">
                <h2>What is context API ?</h2>
                <p> In React we usually send data from one component to another. In that case the data of one component has to be sent to another child component as props. Often the situation is that the child component is much lower than our main component where your data is. That means that data component has another child component, again that child component has another child component. There may be many children doing this. It can be said to be like digging up data. We usually use Redux in such situations or the situation may be more complicated than that. In that case we have a global status that any child can access later if they want, without having to pass all the components as props and take data.</p>
            </div>
            <div className="medium-blog">
                <h2>What is Sementc Element ?</h2>
                <p> HTML5 semantic elements support all modern browsers.Generally semantic tags means about to an element call it with it 's proper name. which induces with it'
                s prime criteria.Able to define separate parts with it 's separate name which previous version of HTML use with classes. Possible combinations are included here. Tags define HTML elements for markups in terms of browser of modern style approach.</p>
            </div>
            <div className="medium-blog">
                <h2>inline inline-block difference ?</h2>
                <h3>Inline</h3>
                <ul>
                    <li>In inlien we cannot use top and bottom margin.</li>
                    <li> We cannot set it 's height and width.</li>
                </ul>
                <h3>Inline-block</h3>
                <ul>
                    <li> In inlien.block we can use top and bottom margin.</li>
                    <li> We can set it 's height and width.</li>
                </ul>
            </div>
        </div>
    );
};

export default Blog;