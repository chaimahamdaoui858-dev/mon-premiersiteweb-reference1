import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  const token = localStorage.getItem("authToken");
  const user = JSON.parse(localStorage.getItem("user"));

  const isAllowed = token && user?.role === "admin";

  if (!isAllowed && location.pathname !== "/login") {
    return <Navigate to="/login" replace />;
  }

  return children;
}
