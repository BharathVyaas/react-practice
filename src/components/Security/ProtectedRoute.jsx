import { isTokenExpired } from "../../utils/tokenUtils";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  if (!token || isTokenExpired(token)) {
    dispatch(logout()); // optional
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
