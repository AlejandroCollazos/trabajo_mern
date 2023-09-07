import {createContext, useContext, useState} from 'react';
import { createTasksRequest, getTasksRequest } from '../api/task';

const TaskContext = createContext();

export const useTasks = ()=>{
    const context = useContext(TaskContext);

    if(!context){
        throw new Error ('use task must be used within a tasks provide')
    }
    return context;
}

export function TaskProvide ({children}){
    const [tasks, setTasks] = useState([]);

    const getTasks = async ()=>{
        try {
            const res = await getTasksRequest();
            setTasks(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async (task)=>{
        console.log('task');
        const res = await createTasksRequest(task)
        console.log(res);
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
            }}>
            {children}
        </TaskContext.Provider>
    )
}