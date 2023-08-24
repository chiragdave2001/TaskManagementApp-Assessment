import React, {createContext, useState, useEffect} from 'react'

const TaskListContext = createContext()

function TaskListContextProvider(props){
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState) 
        /* [
            {id: 1, title: 'Read The Book..' completed: false},
            {id: 2, title: 'Wash The Car..' completed: false},
            {id: 3, title: 'Write Some Code..' completed: false} 
            ....
        ] */
    
    const [editItem, setEditItem] = useState(null)
    
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = title => setTasks([...tasks, {id: Date.now(), title: title, completed: false}])

    const markTaskAsRead = id => setTasks(tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
    ) );

    const clearList = () => setTasks([])

    const findItem = id => {
        const item = tasks.find(task => task.id === id)
        setEditItem(item)
    } 

    const editTask = (id, title) => {
        const newTasks = tasks.map(task => (task.id === id) ? {id: id, title: title} : task )
        //console.log(newTasks)
        setTasks(newTasks)
        setEditItem(null)
    }

    const deleteItem = id => setTasks(tasks.filter(task => task.id !== id))

    return <TaskListContext.Provider value={{
        tasks, 
        addTask, 
        markTaskAsRead, 
        clearList, 
        findItem,
        editItem, 
        deleteItem,
        editTask
    }}>
        {props.children}
    </TaskListContext.Provider>
}

export {TaskListContextProvider as default, TaskListContext}