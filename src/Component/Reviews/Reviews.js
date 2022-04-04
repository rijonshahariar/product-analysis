import React from 'react';
import ReviewUse from '../../Hook/ReviewUse';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = ReviewUse();
    return (

        <div className="review-container">
            {
                reviews.map(review => <Review
                    key={review.id}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;