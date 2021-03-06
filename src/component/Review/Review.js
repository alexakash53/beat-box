import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Review = () => {
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
                reviews.map((review)=><SingleReview key={review.id} review={review}></SingleReview>)
            }
            </div>
            
        </div>
    );
};

export default Review;