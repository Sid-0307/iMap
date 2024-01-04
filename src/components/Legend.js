import React from "react";
import "./Legend.css";
const Legend = () => {
  return (
    <>
      <div className="Main">
        <div className="darkest"> {`>$5k`} </div>
        <div className="dark">$1k-$5k</div>
        <div className="normal">$500-$1k</div>
        <div className="light"> {`<$500`} </div>
      </div>
    </>
  );
};

export default Legend;
