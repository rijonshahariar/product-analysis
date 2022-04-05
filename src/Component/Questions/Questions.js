import React from 'react';
import "./Questions.css"
const Questions = () => {
    return (
        <div>
            <div className='questions'>
                <h1>Asked <span>Questions</span></h1>
                <h4>1. How React Works?</h4>
                <p>React implements a virtual DOM that is basically a DOM tree representation in JavaScript. So when it needs to read or write to the DOM, it will use the virtual representation of it. Then the virtual DOM will try to find the most efficient way to update the browser’s DOM. Unlike browser DOM elements, React elements are plain objects and are cheap to create. React DOM takes care of updating the DOM to match the React elements.</p>
                <h4>2. What is Semantic Tag?</h4>
                <p> The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content.
                    1. State changes can be asynchronous. <br />
                    2. State is mutable. <br />
                    3. State holds information about the components. <br />
                    4. State cannot be accessed by child components. <br />
                    5. Stateless components cannot have State.</p>
                <h4>3. How useState Works?</h4>
                <p>useState is a React Hook that allows you to have state variables in functional components. You have to pass the initial state to this function and it returns a variable with the current state value and another function to update this value. useState should be used only inside functional components. useState is the way if we need an internal state.</p>
            </div>
        </div>
    );
};

export default Questions;