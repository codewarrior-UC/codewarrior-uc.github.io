import React from 'react';
import "../styles/header.css";

// Sets up a basic header component with company logo and h1 tag
function Header () {
    return (
        <header className = "header">
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/f/f0/5b289489146c704a86b3a130-large_%281%29.jpg" alt="wayne enterprises" />
            */}
            <h1>Employee Directory</h1>
        </header>
    );
}

export default Header;
