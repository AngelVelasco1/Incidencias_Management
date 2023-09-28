import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/Auth';


export const Protected = () => {

  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <>
        <Outlet />
        <Navigate to={"/dashboardCamper"} />
      </>
    )
  } else {
    <>
      <Outlet />
      <Navigate to={"/"} />
    </> 
  }
}
