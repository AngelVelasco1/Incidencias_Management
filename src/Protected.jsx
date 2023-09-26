import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
const navigate = useNavigate();

export const Protected = () => {
    if(!isAutenticated) {
        navigate('/login')
    }
  return (
    <Outlet/>
  )
}
