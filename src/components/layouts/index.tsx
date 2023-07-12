import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";

interface ILayoutComponent {
  children: React.ReactNode;
}
const LayoutComponent: React.FC<ILayoutComponent> = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default LayoutComponent;
