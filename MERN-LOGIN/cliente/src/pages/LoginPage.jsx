import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthContex"



function LoginPage() {
  
  const {register, handleSubmit, formState:{errors}}= useForm()
  const {signin, errors: signinErrors}=useAuth();
  
  const onSubmited = handleSubmit(async(data)=>{
    signin(data);
 })


  return (
    <div className='bg-zinc-900 max-w-md p-10 rounded-md' id='con'>
     {
        signinErrors.map((error, i)=>(
          <div className='bg-red-500 text-white p-2' key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmited}>
        <input type="email" {...register("email",{required:true})} placeholder='email' 
        className='w-full bg-zinc-300 text-black px-4 py-4 rounded-md my-2'/>
        {
          errors.email && <p className='text-red-500'>Email is required</p>
        }

        <input type="password" {...register("password",{required:true})} placeholder='password'
        className='w-full bg-zinc-300 text-black px-4 py-4 rounded-md my-2' />
        {
          errors.password && <p className='text-red-500'>password is required</p>
        }
        <button type="submit" className="bg-blue-500 hover:bg-slate-800 text-white py-2 font-bold px-4 rounded full">Login</button>
      </form> 
    </div>
  )
}

export default LoginPage
