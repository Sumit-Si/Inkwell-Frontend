import useAuthStore from "@/store/useAuthStore";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AdminGuard = () => {
  const { isCheckingAuth, authUser, checkAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if(!isCheckingAuth && authUser) {
      navigate("/login", {viewTransition: true});
    }
  }, [])

  if (isCheckingAuth)
    return (
      <div className="fixed inset-0 bg-background/80 backdrop-blur flex items-center justify-center z-50">
        <Loader2Icon className="w-10 h-10 animate-spin text-primary" />
      </div>
    );

    if(authUser?.role !== "ADMIN") {
      return null;
    }

  return <Outlet />
};

export default AdminGuard;
