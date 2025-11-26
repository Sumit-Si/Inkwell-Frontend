import RootLayout from "@/layouts/RootLayout";
import RootErrorBoundary from "@/pages/errors/RootErrorBoundary";
import Home from "@/pages/Home/Home";
import homeLoader from "@/routes/loaders/user/homeLoader";
import AuthGuard from "./guards/AuthGuard";

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
          // loader: homeLoader,
          handle: { breadcrumb: "Home" },
        },

        // {
        //   path: "blogs",
        //   element: <Blogs />,
        //   loader: userBlogLoader,
        //   handle: { breadcrumb: "Blogs" }
        // },
        // {
        //   path: "blogs/:slug",
        //   element: <BlogDetail />,
        //   loader: blogDetailLoader,
        //   handle: { breadcrumb: (data) => data?.title ?? "Blog" }
        // }
      ],
    },
  ],
};

export default rootRoutes;
