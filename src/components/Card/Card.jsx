import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";


// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
 function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
       <span>{param.title}</span>
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={param.value}
        />
       
      </div>
      <div className="detail">
      <span>more..</span>
        <span>{param.value1}</span>
        <span>{param.value2}</span>
        <span>{param.value3}</span>
        
      </div>
    </motion.div>
  );
}

// // Expanded Card
function ExpandedCard({ param, setExpanded }) {


  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
<span>{param.title}</span>
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
      
        <UilTimes onClick={setExpanded} />
      </div>
        
      {/* <div className="chartContainer">
        <Chart options={data.options} series={param.series} type="area" />
      </div> */}
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default Card;
