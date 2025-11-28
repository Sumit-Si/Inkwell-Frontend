import RootLayout from "@/layouts/RootLayout";
import RootErrorBoundary from "@/pages/errors/RootErrorBoundary";
import Home from "@/pages/Home/Home";
import homeLoader from "@/routes/loaders/user/homeLoader";
import AuthGuard from "./guards/AuthGuard";
import Posts from "@/pages/Post/Posts";
import userPostLoader from "./loaders/user/userPostLoader";
import PostDetails from "@/pages/Post/PostDetails";
import blogDetailLoader from "./loaders/user/blogDetailLoader";
import About from "@/pages/Home/About";
import Contact from "@/pages/Home/Contact";

const rootRoutes = {
  path: "/",
  element: <RootLayout />,
  errorElement: <RootErrorBoundary />,
  children: [
    {
      element: <AuthGuard />,
      children: [
        {
          index: true,
          element: <Home />,
          loader: homeLoader,
          handle: { breadcrumb: "Home" },
        },

        {
          path: "posts",
          element: <Posts />,
          loader: userPostLoader,
          handle: { breadcrumb: "Post" }
        },
        {
          path: "posts/:slug",
          element: <PostDetails />,
          loader: blogDetailLoader,
          handle: { breadcrumb: (data) => data?.title ?? "Post" }
        },
        {
          path: "about",
          element: <About />,
          handle: { breadcrumb: "About" }
        },
        {
          path: "contact",
          element: <Contact />,
          handle: { breadcrumb: "Contact" }
        },
      ],
    },
  ],
};

export default rootRoutes;
