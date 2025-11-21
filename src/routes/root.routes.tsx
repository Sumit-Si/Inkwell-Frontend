import RootLayout from "@/layouts/RootLayout";
import RootErrorBoundary from "@/pages/errors/RootErrorBoundary";
import Home from "@/pages/Home/Home";
import homeLoader from "@/routes/loaders/user/homeLoader";

const rootRoutes = {
  path: "/",
  element: <RootLayout />,
  errorElement: <RootErrorBoundary />,
  children: [
    {
      index: true,
      element: <Home />,
      loader: homeLoader,
      handle: { breadcrumb: "Home" }
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
  ]
};

export default rootRoutes;