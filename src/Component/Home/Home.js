import React from 'react';
import { Link } from 'react-router-dom';
import ReviewUse from '../../Hook/ReviewUse';
import speakerimg from '../Image/speaker.jpg'
import Review from '../Review/Review';
import './Home.css'
const Home = () => {
    const [review, setReview] = ReviewUse();
    const reviews = review.slice(0, 3);
    return (
        <div>
            <div className='home'>
                <div className="leftSide">
                    <h2>Unbeatable <span>Music</span></h2>
                    <h2>Feel the <span>Sound</span></h2>

                    <p>
                        Play and Charge endlessly.<br />
                        Take the party with you no matter what the weather.<br />
                        We've been powering the world's top musicians and venues<br /> for more than seven decades.
                    </p>
                    <br />
                    <Link to='./dashboard' className='more-button'>Live Demo</Link>
                </div>

                <div className="rightside">
                    <img src={speakerimg} alt="laptop" />
                </div>
            </div>

            <div className='reviews'>
                <h2>What <span>Customers</span> Say!</h2>
                <div className='review-container home'>
                    {
                        reviews.map(review =>
                            <Review
                                key={review.id}
                                review={review}
                            ></Review>)
                    }
                </div>
                <Link to='./reviews' className='more-button'>See All Reviews</Link>
            </div>

        </div>
    );
};

export default Home;