import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children, isAllowed, redirectPath = "/login" }) {
  const location = useLocation();

  if (!isAllowed && location.pathname !== redirectPath) {
    return <Navigate to={redirectPath} replace state={{ from: location }} />;
  }

  return children;
}
