import React, {useContext} from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'

import {TaskListContext} from '../context/TaskListContext'

function Task({task}) {
    const {markTaskAsRead, findItem,deleteItem} = useContext(TaskListContext)

    return <li className="list-item">
        <span style={task.completed ? { textDecoration: 'line-through' } : null}>{task.title}</span>
        <div className='btn-align' style={{visibility: !task.completed?"visible":"hidden"}}>
            <button 
                onClick={() => markTaskAsRead(task.id)}
                className="task-btn btn-comp">Mark as completed</button>
            <button 
                onClick={() => findItem(task.id)}
                className="task-btn mx-2 btn-edit">Edit</button>
        </div>
        <button 
            onClick={() => deleteItem(task.id)}
            className="task-btn btn btn-edit" style={{visibility: task.completed?"visible":"hidden"}}><i><FaRegTrashAlt/></i></button>
    </li>
}

export default Task
