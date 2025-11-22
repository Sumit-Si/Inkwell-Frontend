import Login from "@/pages/auth/Login";
import Signup from "@/pages/auth/Signup";

const authRoutes = {
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