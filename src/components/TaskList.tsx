
import "../styles/global.scss"
import "../styles/tasklist.scss"
import { FiTrash, FiCheckSquare } from 'react-icons/fi'
import {useState} from 'react'


interface Task {
    id: number;
    description: string;
    wasMode: boolean;
}

export function TaskList(){

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTaskDescription, setTaskDescription] = useState('');


    function newTask(){
        if(!newTaskDescription) return;
        
            const newTask = {
                id: Math.random(), //nao recomendado para aplicações reais
                description: newTaskDescription,
                wasMode: false,
            }

            setTasks(oldState => [...oldState, newTask]);
            setTaskDescription('');

       
    }

    function RemoveTasks(id: number){

        const FilterTasks = tasks.filter(task => task.id != id);

        setTasks(FilterTasks);
    }


    function completedTasks(id: number){
        const CompletedTask = tasks.map(task => task.id == id ?
            {
            ...task, 
            wasMode: !task.wasMode
        } : task)

        setTasks(CompletedTask);
        
    }

    return (
        <div id="content">
            <h2>My tasks</h2>

            <div id="insertion-area">

                <input type="text" placeholder="Adicione uma tarefa" 
                onChange={(e) => setTaskDescription(e.target.value)}
                value={newTaskDescription}>
                </input>

                <button type="button" data-testid="add-task-button" onClick={newTask}>
                    <FiCheckSquare size={18} color="white"/>
                </button>  
            </div>

            <div id="listTasks">
                <ul>
                    {tasks.map(task => (
                    <li key={task.id}>
                        <div id="task-left" className={task.wasMode ? 'completed' : ''}>
                        <input 
                        type="checkbox"
                        readOnly
                        checked={task.wasMode}
                        onClick={() => completedTasks(task.id)}
                        />
                            <p>{task.description}</p> <span>{task.wasMode ? "Completa" : 'Incompleta'}</span>
                        </div>

                        <div id="task-right">
                        <button type="button" onClick={() => RemoveTasks(task.id)}>
                            <FiTrash size={18}/>
                        </button>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

