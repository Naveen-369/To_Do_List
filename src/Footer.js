import React from 'react';
import './Footer.css';

const Footer = () => {
    let obje=new Date();
return (
    <div className='CopyRight'>
        <footer>CopyRight &copy; {obje.getFullYear()}</footer>
    </div>
)
}

export default Footer
