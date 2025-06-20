import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import UserListPage from "../pages/UserListPage";
import { ROUTES } from "../constants/routes";
import { ProtectedRoute } from "../components/Security/ProtectedRoute";

const AppRouter = () => (
  <Routes>
    <Route path={ROUTES.LOGIN} element={<LoginPage />} />
    <Route element={<ProtectedRoute />}>
      <Route path={ROUTES.USERS} element={<UserListPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
