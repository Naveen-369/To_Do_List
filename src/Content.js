import React from 'react'
import './Content.css'
const Content = () => {
    function GreetUser(){
        const arr=["Naveen","Kumar","Liar"];
        let g = Math.floor(Math.random()*arr.length);
        return arr[g];
    }
    return (
    <div>
        <p className='summa'>Hello {GreetUser()}</p>
    </div>
    )
}

export default Content
