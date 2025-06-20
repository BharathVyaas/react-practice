import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { Typography, IconButton, Tooltip } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { motion } from "framer-motion";

import UserTable from "../components/UserTable/UserTable";
import { fetchUsersRequest } from "../features/users/userSlice";
import { useThemeMode } from "../context/ThemeContext";
import MainLayout from "../layouts/MainLayout";

const UserListPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);

  const { mode, toggleTheme } = useThemeMode();

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>User Management — Enterprise App</title>
        <meta property="og:title" content="User Management" />
        <meta property="og:description" content="View and manage your users" />
        <meta property="og:image" content="/logo192.png" />
        <meta
          property="og:url"
          content="https://your-enterprise-app.com/users"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <MainLayout>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <Typography variant="h4" className="font-bold">
              User List
            </Typography>
            <Tooltip title="Toggle Theme">
              <IconButton onClick={toggleTheme} color="inherit">
                {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
              </IconButton>
            </Tooltip>
          </div>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : (
            <UserTable users={users} />
          )}
        </motion.div>
      </MainLayout>
    </>
  );
};

export default UserListPage;
