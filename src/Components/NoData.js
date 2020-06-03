import React from "react";
import Empty from "../images/Empty.svg";
function NoData(props) {
  return (
    <div style={{ textAlign: "center", top: "20%", position: "relative" }}>
      <img src={Empty} width={200} height={200} className={props.style} />
      <p>{props.message}</p>
    </div>
  );
}

export default NoData;
