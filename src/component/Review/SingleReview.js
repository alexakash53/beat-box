import React from 'react';
import './Review.css';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Rating from 'react-rating';

const SingleReview = (props) => {
    const { Name, rating, Review, img } = props.review
    console.log(Name)
    return (
        <div className="single-review">
            <img src={img} alt="" />
            <p>{ Review}</p>
            <h3>{Name}</h3>
            <Rating
                initialRating={rating}
                fullSymbol={<FaStar style={{color:"#FFD13C"}} />}
                emptySymbol={<FaStar style={{color:"#ddd"}} />}
            />
            {/* <span className='rating'>{ Rating}</span> */}
        </div>
    );
};

export default SingleReview;