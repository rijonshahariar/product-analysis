import React from 'react';
import { FaStar } from "react-icons/fa";
import './Review.css'
const Review = ({ review }) => {
    const { name, picture, rvw, rate } = review;
    return (

        <div className='row g-3'>

            <div className='col-12 col-md-3 card p-4 shadow-md rounded'>

                <img src={picture} alt="" />
                <h3 className='name'>{name}</h3>

                <p className='review'>{rvw}</p>
                <p className='rating'>Rating: <FaStar className='star' /> {rate}</p>

            </div>
        </div >
    );
};

export default Review;