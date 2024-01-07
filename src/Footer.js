import React from 'react'

const Footer = () => {
    let obje=new Date();
return (
    <div className='CopyRight'>
        <footer>CopyRight &copy; {obje.getFullYear()}</footer>
    </div>
)
}

export default Footer
