import React from 'react';
import "./Questions.css"
const Questions = () => {
    return (
        <div>
            <div className='questions'>
                <h1>Asked <span>Questions</span></h1>
                <h2>1. What is Context API?</h2>
                <p>Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. Context API is a new feature React that allows one to share state across the entire app lightly and with ease.</p>
                <h2>2. What is Semantic Tag?</h2>
                <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. The core characteristic of a semantic element is that it clearly communicated its meaning to both the developer and the browser. These elements clearly define its content.
                    The semantic HTML tags help the search engines and other user devices to determine the importance and context of web pages. The pages made with semantic elements are much easier to read.
                </p>
                <h2>3. Differences Between Inline, Block and Inline-Block?</h2>
                <p><strong>Inline</strong><br />
                    1. A new line is not started with inline, and it takes up only necessary space or width. <br />
                    2. Inline elements take up the space of an entire line and there will be only one line within the space width. <br />
                    3. The width and height sets are not included in inline elements.<br />
                    4. There are no line breaks in an inline element.  <br />
                    5. Inline elements can break among the lines.	 <br /> <br />
                    <strong>Block</strong><br />
                    1. A block element always begins a new line and extends to left and right. <br />
                    2. There are width and height elements in block elements. <br />
                    3. Block elements cannot break among the lines. <br />
                    4. There are width and height elements in block elements.<br /><br />
                    <strong>Inline-Block</strong><br />
                    1.  It’s formatted just like the inline element, where it doesn’t start on a new line. BUT, you can set width and height values. <br />
                    2. Compared to block elements, the major difference is that inline-block does not add a line-break after the element, so the element can sit next to other elements.

                </p>
            </div>
        </div >
    );
};

export default Questions;