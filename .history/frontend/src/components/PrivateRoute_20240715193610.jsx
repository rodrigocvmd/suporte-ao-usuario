import { Navigate, Outlet } from "react-router-dom"
import {useAuthStatus} from "../hooks/useAuthStatus"

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()
    
    if(checking)

  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
