import React from "react";
import "./Scroll.css";

const Scroll = (props) => {
  const htmlContent = (
    <div className="scroll" data-testid="scroll">
      {props.children}
    </div>
  );
  return htmlContent;
};

export default Scroll;
