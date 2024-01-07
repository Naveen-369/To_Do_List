import React from 'react'
const Content = () => {
    function GreetUser(){
        const arr=["Naveen","Kumar","Liar"];
        let g = Math.floor(Math.random()*arr.length);
        return arr[g];
    }
    return (
    <main>
        <p>Hello {GreetUser()}</p>
    </main>
    )
}

export default Content
