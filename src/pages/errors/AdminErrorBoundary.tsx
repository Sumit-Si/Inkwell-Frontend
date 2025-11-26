import { Button } from "@/components/ui/button";
import { isRouteErrorResponse, Navigate, useLocation, useNavigate, useRouteError } from "react-router-dom";

const AdminErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const location = useLocation();

  if (isRouteErrorResponse(error)) {
    const tokenExpired =
      error.status === 401 && error.data.includes("token expired");

    if (tokenExpired) {
      return <Navigate to={`/refresh-token?redirect=${location.pathname}`} />;
    }

    return (
      <div className="h-dvh grid place-content-center place-items-center gap-4">
        <h1 className="text-4xl font-semibold">
          {error.status} {error.statusText}
        </h1>

        <p className="text-muted-foreground max-w-[60ch] text-center text-balance">
          {error.data}
        </p>

        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className="h-dvh flex flex-col items-center justify-center max-w-6xl mx-auto">
        <div className="w-10/12 p-8 shadow-lg border rounded-lg">
          <h1 className="text-3xl mb-8 font-semibold text-center text-foreground">
            Error
          </h1>
          <p className="text-red-600 text-center bg-red-800/15 rounded-lg py-2 px-3">
            {error.message}
          </p>
          <div className="max-h-80 overflow-y-scroll border-2 border-red-500/30 rounded-lg p-2 mt-5">
            <p className="text-base mb-1 font-semibold text-amber-200">
              The stack trace is:
            </p>
            <pre className="text-wrap text-sm">{error.stack || []}</pre>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Unknown Error</h1>;
  }
};

export default AdminErrorBoundary;
