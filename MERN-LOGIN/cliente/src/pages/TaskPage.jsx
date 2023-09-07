import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

const TaskPage = () => {

  const {getTasks, tasks}= useTasks ()
  console.log(tasks);

  useEffect(()=>{
    getTasks();
  },[])

  return (
    <div>
      <h1 className="text-center mb-10 my-10">this is the homework page</h1>
      <br />
      {
        tasks.map(task =>(
          <div key={task._id}>
            <h1 className="text-center text-black">{task.title}</h1>
            <p className="text-center">{task.description}</p>
            <br />
          </div>
        ))
      }
    </div>
  )
}

export default TaskPage
