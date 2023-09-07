import {useForm} from 'react-hook-form'
import { useTasks } from '../context/TaskContext';

const TaskFormPage = () => {

  const {register, handleSubmit} = useForm();
  const {createTask} = useTasks()

  const onSubmit = handleSubmit((data)=>{
    createTask(data);
  })

  return (
    <div>
      <div className="bg-zinc-900 max-w-md w-full p-8 rounded-md">
        <form onSubmit={onSubmit}>
          <input type="text" className="min-w-full bg-zinc-600 text-white px-3 py-2 rounded-md my-4" placeholder="Title" {...register("title")}/>
          <textarea rows="3" className="text-white min-w-full bg-zinc-600 px-3 py-2 rounded-md my-4" {...register("description")}></textarea>
          <button className="bg-zinc-300 text-black">
            SAVE
          </button>
        </form>
      </div>
    </div>
  )
}

export default TaskFormPage
