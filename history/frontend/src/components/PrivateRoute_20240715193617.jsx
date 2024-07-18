import { Navigate, Outlet } from "react-router-dom"
import {useAuthStatus} from "../hooks/useAuthStatus"

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()
    
    if(checkingStatus){
        <Spi
    }

  return (
    <div>
      
    </div>
  )
}

export default PrivateRoute
