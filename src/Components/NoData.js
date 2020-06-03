import React from "react";

function NoData(props) {
  return (
    <div style={{ textAlign: "center", top: "20%", position: "relative" }}>
      <img
        src="../../assets/images/Empty.svg"
        width={200}
        height={200}
        className={props.style}
      />
      <p>{props.message}</p>
    </div>
  );
}

NoData.defaultProps = {
  message: "No data available!",
  image: "",
  style: "style it bro",
};

export default NoData;
