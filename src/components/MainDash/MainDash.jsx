import React from "react";
import Cards from "../Cards/Cards";
import Chartcards from "../Chartcards/Chartcards";
import "./MainDash.css";

const MainDash = () => {
  return (
    <div className="MainDash">
      <h1>Analytics</h1>

      <Cards />
      <Chartcards />
    </div>
    
  );
};

export default MainDash;
