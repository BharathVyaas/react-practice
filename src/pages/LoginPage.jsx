import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginRequest } from "../features/auth/authSlice";
import { Button, TextField, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const initialFormData = { email: "", password: "" };

const LoginPage = () => {
  const [formDirty, setFormDirty] = useState(false);
  const [goHome, setGoHome] = useState(false);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const error = useSelector((state) => state.auth.error);

  const [form, setForm] = useState(initialFormData);

  useEffect(() => {
    if (
      !formDirty &&
      form.email !== initialFormData.email &&
      form.password !== initialFormData.password
    ) {
      setFormDirty(true);
    }
  }, [form, setFormDirty, goHome, setGoHome, token, formDirty]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formDirty && token && !goHome) setGoHome(true);
    dispatch(loginRequest(form));
  };

  if (goHome) return <Navigate to="/users" />;

  return (
    <>
      <Helmet>
        <title>Login — Enterprise App</title>
        <meta
          name="description"
          content="Login to securely access your dashboard."
        />
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            script-src 'self';
            style-src 'self' 'unsafe-inline';
            img-src 'self' data:;
            font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
            connect-src 'self' http://localhost:5000;
          "
        />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-center h-screen bg-gray-100"
      >
        <Paper elevation={6} className="p-6 w-96">
          <Typography variant="h5" className="mb-4 font-bold text-center">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              margin="normal"
              value={form.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={form.password}
              onChange={handleChange}
            />
            {error && (
              <Typography className="text-red-500 text-sm mt-1">
                {error}
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
              className="mt-4"
            >
              Login
            </Button>
          </form>
        </Paper>
      </motion.div>
    </>
  );
};

export default LoginPage;
