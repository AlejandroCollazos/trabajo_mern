import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContex';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function RegisterPage() {

    const {register, handleSubmit, formState:{errors}}= useForm();
    const {signup, isAuthenticathed, errors: RegisterErrors} = useAuth();
    const navigate=useNavigate();

    useEffect(()=>{
      if(isAuthenticathed) navigate('/tasks');
    },[isAuthenticathed,navigate])

    const onSubmited = handleSubmit(async(values)=>{
       signup(values); //console.log(values)
    })

  return (
    <div className='bg-zinc-900 max-w-md p-10 rounded-md' id='con'>

      {
        RegisterErrors.map((error, i)=>(
          <div className='bg-red-500 text-white p-2' key={i}>
            {error}
          </div>
        ))
      }
      <form onSubmit={onSubmited}>
        <input type="text"{...register ("username",{required:true})} placeholder='username' className='w-full bg-zinc-300 text-black px-4 py-4 rounded-md my-2' />
        {
          errors.username && <p className='text-red-500'>username is required</p>
        }

        <input type="email" {...register("email",{required:true})} placeholder='email' className='w-full bg-zinc-300 text-black px-4 py-4 rounded-md my-2'/>
        {
          errors.email && <p className='text-red-500'>Email is required</p>
        }

        <input type="password" {...register("password",{required:true})} placeholder='password'className='w-full bg-zinc-300 text-black px-4 py-4 rounded-md my-2' />
        {
          errors.password && <p className='text-red-500'>password is required</p>
        }
        <button type="submit" className="bg-blue-500 hover:bg-slate-800 text-white py-2 font-bold px-4 rounded full">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
