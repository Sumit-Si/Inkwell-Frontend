import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";
import PublicGuard from "@/routes/guards/PublicGuard";

const authRoutes = {
  element: <PublicGuard />,
  children: [
    {
      path: "/login",
      element: <Login />,
      // action: loginAction,
      handle: { breadcrumb: "Login" }
    },
    {
      path: "/signup",
      element: <Signup />,
      // action: signupAction,
      handle: { breadcrumb: "Signup" }
    },
    // {
    //   path: "/refresh-token",
    //   loader: refreshTokenLoader
    // }
  ]
};

export default authRoutes;