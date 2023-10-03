import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import { Spinner } from "@nextui-org/react";


export const Protected = () => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) {

    return <div className="flex justify-center items-center h-screen">
      <Spinner label="Loading..." color="primary" labelColor="primary" size='lg' />

    </div>
  }

  if (!isAuthenticated) {
    return (
      <>
        <Outlet />
        <Navigate to="/" />
      </>
    );
  } else {

    if (location.pathname != "/") {
      return (
        <>
          <Outlet />
        </>
      );
    } else {
      return (
        <>
          <Outlet />
          <Navigate to="/dashboardCamper" />
        </>
      );
    }

  }
}