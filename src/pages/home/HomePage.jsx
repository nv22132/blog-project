import React from "react";
import MainLayout from "../../component/MainLayout.jsx";
import Hero from "./container/hero";
import Articles from "./container/Articles";
import CTA from "./container/CTA";



const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;