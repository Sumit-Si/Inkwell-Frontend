import useAuthStore from '@/store/useAuthStore'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const AuthGuard = () => {
  const {checkAuth,authUser} = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    if(!authUser) navigate("/login");
    navigate("/");
  }, [checkAuth]);

  return (
    <Outlet />
  )
}

export default AuthGuard