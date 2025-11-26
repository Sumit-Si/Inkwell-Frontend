import useAuthStore from "@/store/useAuthStore";
import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AuthGuard = () => {
  const { checkAuth, authUser, isCheckingAuth } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isCheckingAuth && !authUser) {
      navigate("/login", { viewTransition: true });
    }
  }, [authUser, isCheckingAuth,navigate]);

  if (isCheckingAuth) {
    return (
      <div className="fixed h-dvh z-50 top-0 left-0 w-full bg-black/70 backdrop-blur-[0.15em] flex items-center justify-center">
        <Loader2Icon className="animate-spin w-10 h-10" />
      </div>
    );
  }

  return <Outlet />;
};

export default AuthGuard;
