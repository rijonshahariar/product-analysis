import React from 'react';
import ReviewUse from '../../Hook/ReviewUse';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews] = ReviewUse();
    return (
        <div className='heading'>
            <h2>Customer <span>Reviews</span></h2>

            <div className="review-container container">
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>

    );
};

export default Reviews;