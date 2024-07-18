import { Navigate, Outlet } from "react-router-dom"
import {useAuthStatus} from "../hooks/useAuthStatus"

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuth
    
  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
