import React, { useState } from "react";
import Navbar from "./pages/Navbar";
import Navbar2 from "./pages/Navbar2";
import Hero from "./pages/Hero";
import Navbar3 from "./pages/Navbar3";
import Heading from "./pages/Heading";
import Main from "./pages/Main";
import Heading2 from "./pages/Heading2";
import Classroom from "./pages/Classroom";
import Heading3 from "./pages/Heading3";
import Main2 from "./pages/Main2";
import { Link } from "react-scroll"; // Import react-scroll Link
import Servicepage from "./pages/Servicepage";

const App = () => {
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
      </div>

      {/* Section 5: Get Started */}
      <div id="getstarted">{/* Add your get started content here */}</div>

      {/* Section 6: Plans */}
      <div id="plans">{/* Add your plans content here */}</div>
    </div>
  );
};

export default App;
