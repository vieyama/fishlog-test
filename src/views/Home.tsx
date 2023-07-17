import SectionOne from "@/components/Section/SectionOne";
import SectionTwo from "@/components/Section/SectionTwo";
import LayoutComponent from "@/components/layouts";
import React from "react";

const Home = () => {
  return (
    <LayoutComponent>
      <SectionOne />
      <SectionTwo />
    </LayoutComponent>
  );
};

export default Home;
