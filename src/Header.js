import React from 'react'
const Header = (props) => {
    return (
        <header>
            <h1>{props.author}</h1>
            <nav>
                <p>{props.heading}</p>
                {/* Button has to be added here */}
            </nav>
        </header>
    );
}

export default Header
