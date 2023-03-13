import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export const ProtectRoute = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem("@TOKEN")

    useEffect(()=>{
      if(!token){
        navigate("/")
      }
    },[])
    
    return token ? <Outlet/>:null
}

