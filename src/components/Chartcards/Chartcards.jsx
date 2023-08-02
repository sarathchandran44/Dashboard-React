import React from "react";
import "./Chartcards.css";


import Charts1 from "../Charts/Charts1"

import Charts2 from "../Charts/Charts2"

import Charts3 from "../Charts/Charts3"
    const Chartcards = () => {
        return (
          <div className="Charts">
           
                <div className="Charts1" >
                  <Charts1/>
                 
                </div>
                <div className="Charts2" >
                  <Charts2/>
                 
                </div>
                <div className="Charts3" >
                  <Charts3/>
                 
                </div>
            
          </div>
        );
      };

export default Chartcards;