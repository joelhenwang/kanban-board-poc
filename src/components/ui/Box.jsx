import React from "react";

function Box({
  children,
  borderRadius = "12px",
  padding = "12px",
  bg = "#ffffff",
  borderColor = "#000000",
  borderWidth = "1px",
  borderStyle = "solid",
  margin = "8px",
  boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  ...props
}) {
  const boxStyle = {
    backgroundColor: bg,
    borderRadius: borderRadius,
    border: `${borderWidth} ${borderStyle} ${borderColor}`,
    padding: padding,
    boxShadow: boxShadow,
    margin: margin,
    ...props,
  };

  return <div style={boxStyle}>{children}</div>;
}

export default Box;
