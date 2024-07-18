import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [setCheckingStatus, setCheckingStatus] = useState(false)
}