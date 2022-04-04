import React from 'react';
import error from '../Image/404_animation.gif';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div>
            <img src={error} alt="nothing found" />
        </div>
    );
};

export default ErrorPage;