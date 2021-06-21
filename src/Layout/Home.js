import React from "react";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import Jumbotron from "./Jumbotron/Jumbotron";
import Navbar from "./Navbar/Navbar";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
