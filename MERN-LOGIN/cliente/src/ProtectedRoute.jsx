import { Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContex"


const ProtectedRoute = () => {
  const {loading, isAuthenticathed}= useAuth();
  console.log(loading, isAuthenticathed)
  if(loading)return <h1>LOADING.....</h1>
  if(!loading && !isAuthenticathed)return <NativeDate to='/login' replace/>
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default ProtectedRoute
