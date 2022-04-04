import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleReview from '../Review/SingleReview';
import '../Review/Review.css';


const HomeReview = () => {
    const [reviews, setReviews] = useState([])
    
    useEffect(() => {
        fetch('./fakedata/reviews.json')
            .then(res => res.json())
            .then(data => { 
                console.log(data)
                setReviews(data)
            })
    },[])
    return (
        <div div className = 'container review-full' >
            <h2>Our Customers Review</h2>
            <div className="review-area">
            {
                reviews.slice(0,4).map((review)=><SingleReview key={review.id} review={review}></SingleReview>)
            }
            </div>
            <div style={{textAlign:'center',marginTop:'20px',}}>
                <Link to='Review'><button className="btn btn-black">See All Reviews</button></Link>
            </div>
        </div>
    );
};

export default HomeReview;