//Importing the CSS package
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

function Content() {

    //Delcaration of the function to get input from the user
    const handleCreation=()=>{
        let input =document.getElementById("TaskGetter");
        let textvalue=input.value;
        let nextid=tasks.length+1;
        let newtask={
            id:nextid,
            text:textvalue,
            reminder:false
        };
        setTasks(Previous_Tasks=>[...Previous_Tasks,newtask]);
        input.value='';
    }
    


    // Declaration of the Usestate hooks for the Seamless Creation and deletion experience
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctor Appointment',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            reminder: false,
        },
    ]);

    // Declaration the function
    const handleCheck = (id) => {
        setTasks(prevTasks => prevTasks.map(task => {
            if (task.id === id) {
                return { ...task, reminder: !task.reminder };
            }
            return task;
        }));
    };

    //Declaration of tnhe functin for the Deletion function

    function Deletenode(id) {
        const li = document.getElementById(`CheckBox${id}`).parentNode;
        if (li) 
            li.remove();
    }


    // Returning the component
    return (
        <main>
            <section className="inputter">
                <input type="text" name="TaskGetter" id="TaskGetter" />
                <button type="button" onClick={handleCreation}>Add New Task</button>
            </section>
                <ul>
                {tasks.map((task) => (
                    <li key={task.id} id={`${task.id}`}>
                        <input
                            type="checkbox"
                            id={`CheckBox${task.id}`}
                            checked={task.reminder}
                            onChange={() => handleCheck(task.id)}
                        />
                        <label>{task.text}</label>
                        <FaTrashAlt role='button' onClick={()=>Deletenode(task.id)} tabIndex={0} />
                    </li>
                ))}
            </ul>
        </main>
    );
}

export default Content;