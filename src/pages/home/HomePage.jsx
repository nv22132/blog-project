import React from "react";
import MainLayout from "../../component/MainLayout.jsx";
import Hero from "./container/hero";
import Articles from "./container/Articles";


const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
    </MainLayout>
  );
};

export default HomePage;