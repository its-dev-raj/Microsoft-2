import React from "react";
import Navbar from "./page1/Navbar";

import Main from "./page1/Main";
import Slid from "./page1/Slid";
import Maximise from "./page1/Maximise";
import Heading from "./page1/Heading";
import Business from "./page1/Business";
import Follow from "./page1/Follow";
import Bottom from "./page1/Bottom";
const Page1 = () => {
  return (
    <>
      <Navbar />
      <Slid />
      <Main />
      <Maximise />
      <Heading />
      <Business />
      <Follow />
      <Bottom />
    </>
  );
};

export default Page1;
