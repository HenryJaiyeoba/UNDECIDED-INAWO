import React from "react";
import Suggestions from "@/components/Suggestions";
import Feed from "@/components/Feed";
import Nav from "@/components/Nav";
import "@/styles/global.css";

function HomePage() {
  return (
    <div className=" boiler-grid">
      <Nav />
      <Feed />
      <Suggestions />
    </div>
  );
}

export default HomePage;
