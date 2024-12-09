import React from "react";
import Navbar from "./page2/Navbar";
import Navbar2 from "./page2/Navbar2";
import Hero from "./page2/Hero";
import Navbar3 from "./page2/Navbar3";
import Heading from "./page2/Heading";
import Main from "./page2/Main";
import Heading2 from "./page2/Heading2";
import Classroom from "./page2/Classroom";
import Heading3 from "./page2/Heading3";
import Main2 from "./page2/Main2";
import { Link } from "react-scroll"; // Import react-scroll Link
import Servicepage from "./page2/Servicepage";
import Customer from "./page2/Customer";
import Loreal from "./page2/Loreal";
import Getstarted from "./page2/Getstarted";
import Getcard from "./page2/Getcard";
import Aigenrated from "./page2/Aigenrated";
import Footer from "./page2/Footer";

const Page2 = () => {
  return (
    <div className="relative">
      <Navbar />
      <Navbar2 />
      <Hero />
      <Navbar3 />

      {/* Section 1: Featured News */}
      <div id="featurednews">
        <Heading />
        <Main />
      </div>

      {/* Section 2: Solutions */}
      <div id="solutions">
        <Heading2 />
        <Classroom />
      </div>

      {/* Section 3: Products and Services */}
      <div id="productsandservices">
        <Heading3 />
        <Main2 />
        <Servicepage />
      </div>

      {/* Section 4: Customer Stories */}
      <div id="customerstories">
        {/* Add your customer stories content here */}
        <Customer />
        <Loreal />
      </div>

      {/* Section 5: Get Started */}
      <div id="getstarted">
        {/* Add your get started content here */}
        <Getstarted />
        <Getcard />
        <Aigenrated />
        <Footer />
      </div>
      {/* Section 6: Plans */}
      <div id="plans">{/* Add your plans content here */}</div>
    </div>
  );
};

export default Page2;
