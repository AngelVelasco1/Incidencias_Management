import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

export const Protected = () => {
  const { isAuthenticated, loading } = useAuth();
  if(loading) {
    return <h1>Loading...</h1>
  }

  if (!isAuthenticated) {
    return (
      <>
        <Outlet />
        <Navigate to="/" />
      </>
    );
  } else {

    if(location.pathname != "/") {
      return (
        <>
          <Outlet />
        </>
      );
    }else {
      return (
        <>
          <Outlet />
          <Navigate to="/dashboardCamper" />
        </>
      );
    }
    
}
}