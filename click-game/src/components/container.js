import React from "react";

const containerStyle = {
  paddingTop: "50px",
  background: "#ECEFF1",
  height: "100%",
  display: "flex",
  flexFlow: "row wrap",
  padding: "20px",
  justifyContent: "space-around",
  alignContent: "flex-start",
  overflow: "auto"
};

function Container(props) {
  return <div style={containerStyle}>{props.children}</div>;
}

export default Container;
