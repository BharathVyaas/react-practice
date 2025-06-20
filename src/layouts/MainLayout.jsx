import React from "react";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Container maxWidth="lg" className="py-8">
      {/* Add header/sidebar/footer here if needed */}
      {children}
    </Container>
  );
};

export default MainLayout;
