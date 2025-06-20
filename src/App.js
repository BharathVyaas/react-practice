// src/App.js
import React from "react";
import AppRouter from "./router/AppRouter";
import IdleLogout from "./components/Security/IdleLogout";
import { IDEALLOGOUTTIME } from "./constants/auth";

function App() {
  return (
    <>
      <IdleLogout timeout={IDEALLOGOUTTIME} />
      <AppRouter />
    </>
  );
}

export default App;
