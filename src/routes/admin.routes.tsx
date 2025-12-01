import AdminGuard from "@/routes/guards/AdminGuard";
import adminLoader from "@/routes/loaders/admin/adminLoader";

const adminRoutes = {
  path: "/admin",
  element: <AdminGuard />, // protect everything below
  loader: adminLoader,

  //   children: [
  //     {
  //       element: <AdminLayout />, // layout inside guard
  //       errorElement: <AdminErrorBoundary />,

  //       children: [
  //         {
  //           path: "dashboard",
  //           element: <Dashboard />,
  //           loader: dashboardLoader,
  //           handle: { breadcrumb: "Dashboard" }
  //         },
  //         {
  //           path: "blogs",
  //           element: <AdminBlogs />,
  //           loader: allBlogLoader,
  //           action: blogsAction,
  //           handle: { breadcrumb: "Blogs" }
  //         },
  //         {
  //           path: "blogs/create",
  //           element: <BlogCreate />,
  //           action: blogCreateAction,
  //           handle: { breadcrumb: "Create Blog" }
  //         },
  //         {
  //           path: "blogs/:slug/edit",
  //           element: <BlogEdit />,
  //           loader: blogDetailLoader,
  //           action: blogEditAction,
  //           handle: { breadcrumb: "Edit Blog" }
  //         },
  //         {
  //           path: "comments",
  //           element: <AdminComments />,
  //           loader: allCommentLoader,
  //           handle: { breadcrumb: "Comments" }
  //         },
  //         {
  //           path: "users",
  //           element: <AdminUsers />,
  //           loader: allUserLoader,
  //           action: allUserAction,
  //           handle: { breadcrumb: "Users" }
  //         }
  //       ]
  //     }
  //   ]
};

export default adminRoutes;
