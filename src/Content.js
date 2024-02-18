//Importing the CSS package
import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa'; 

function Content() {
    //Declaration of the Usestate hooks for the Seamless Creation and deletion experience
    const [tasks]=useState([
        {
            id:1,
            text:'Doctor Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:true,
        },
        {
            id:2,
            text:'Meeting at School',
            day:'Feb 6th at 1:30pm',
            reminder:true,
        },
        {
            id:3,
            text:'Food Shopping',
            day:'Feb 5th at 2:30pm',
            reminder:false,
        },
    ])
    //Returning the component
    return (
    <main>
        <ul>
            {
                tasks.map((task)=>{
                    return (<li key={task.id}>
                        <input type="checkbox" checked={task.reminder}/>
                        <label>{task.text}</label>
                        <FaTrashAlt
                            role='button'
                            tabIndex={0}
                        />
                    </li>)
                })
            }
        </ul>
    </main>
    )
}

export default Content
