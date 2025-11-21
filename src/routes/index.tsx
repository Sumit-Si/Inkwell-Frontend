import { createBrowserRouter } from "react-router-dom";
import rootRoutes from "@/routes/root.routes";
import authRoutes from "@/routes/auth.routes";
import adminRoutes from "@/routes/admin.routes";

const router = createBrowserRouter([rootRoutes, authRoutes, adminRoutes]);

export default router;
