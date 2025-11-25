import { create } from "zustand";
import authService from "../api/authService";
import { toast } from "sonner";
import type { ErrorResponse, loginData, UserData } from "@/types";

type AuthState = {
  authUser: UserData | null;
  isSignInUp: boolean;
  isLoggingIn: boolean;
  isCheckingAuth: boolean;
  checkAuth: () => Promise<void>;
  login: (credientials: { email: string; password: string }) => Promise<void>;
  signup: (userData: UserData) => Promise<void>;
  logout: () => Promise<void>;
};

const useAuthStore = create<AuthState>((set) => ({
  authUser: null,
  isSignInUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true });

    try {
      const res = await authService.getMe();
      console.log("Checking auth", res);

      set({ authUser: res.user });
    } catch (error) {
      console.log("Error checking auth: ", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (userData) => {
    set({ isSignInUp: true });
    try {
      const res = await authService.register(userData);
      console.log("Signup res: ", res);

      set({ authUser: res.user });
      toast.success("Signup successfully");
    } catch (error) {
      console.log("Error signing up: ", error?.response?.data?.error);
      toast.error(error?.response?.data?.error || error?.response?.data?.message);
    } finally {
      set({ isSignInUp: false });
    }
  },

  login: async (credientials: loginData) => {
    set({ isLoggingIn: true });
    try {
      const res = await authService.login(credientials);
      console.log("Login res: ", res);
      const user = res?.user;
      set({ authUser: user });
      toast.success("Login successfully");
      // return user;
    } catch (error) {
      console.log("Error logging in: ", error);
      toast.error(
        error?.response?.data?.error || error?.response?.data?.message
      );
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await authService.logout();
      set({ authUser: null });
      toast.success("Logout successfully");
    } catch (error) {
      console.log("Error logging out: ", error);
    }
  },
}));

export default useAuthStore;
