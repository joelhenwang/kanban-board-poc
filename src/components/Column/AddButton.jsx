import React from "react";
import Box from "../ui/Box";
import { useState } from "react";
import SleekButton from "../ui/Button";

function AddButton({ column, columnOnClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => columnOnClick}
        style={{ cursor: "pointer" }}
      >
        <Box
          color="white"
          border="none"
          padding="12px 10px"
          borderRadius="8px"
          margin="4px 0px"
          backgroundColor={isHovered ? "#86a1b5" : "transparent"}
          transition={isHovered ? "background-color 0.2s ease-in-out" : ""}
          boxShadow={isHovered ? "0 8px 16px rgba(0, 0, 0, 0.3)" : ""}
        >
          <span style={{ marginRight: 4 }}>+ </span>
          <span> Add Task</span>
        </Box>
      </div>
    </div>
  );
}

export default AddButton;
