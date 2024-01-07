//Importing the CSS package
import React from 'react';
import { useState } from 'react';
import './Content.css';
//Declaration of the package
function Content() {
    function GreetUser(){
        const arr=["Naveen","Kumar","Liar"];
        let g = Math.floor(Math.random()*arr.length);
        return arr[g];
    }
    //Declaration of the function that changes the values of the count
    const[count,setCount]=useState(0);
    function Increment(){setCount(count+1);}
    function Decrement(){setCount(count-1);}
    //Declaration of the JSX
    return (
    <main>
        <p>Hello {GreetUser()}</p>
        <button type="button">Subscribe</button>
        <button type="button" onClick={Decrement}>-</button>
        <span>{count}</span>
        <button type="button" onClick={Increment}>+</button>
    </main>
    )
}

export default Content
