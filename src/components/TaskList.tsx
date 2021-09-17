import React from 'react'
import "../styles/global.scss"
import "../styles/tasklist.scss"
import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import { useState } from 'react';


interface Task {
    id: number;
    description: string;
    wasMode: boolean;
}




export function TaskList(){

    //const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskDescrition, setTaskDescription] = useState('');


    function newTaks(){
        if(newTaskDescrition == ""){
           return;
        }
        else{
            const Task = {
                id: Math.random(),
                description: newTaskDescrition,
                wasMode: false,
            }
        }
        
    }

    return (
        <div id="content">
            <h2>My tasks</h2>
            <div id="insertion-area">
                <input type="text" placeholder="Adicione uma tarefa" 
                onChange={(e) => setTaskDescription(e.target.value)}
                value={newTaskDescrition}
                ></input>
                <button type="button" onClick={newTaks}>
                    <FiCheckSquare size={22}/>
                </button>               
            </div>
            <div id="listTaks">
                <div className="item">
                    <p>{newTaskDescrition}</p>
                    <input type="checkbox"></input>
                </div>
            </div>
        </div>
    )
}