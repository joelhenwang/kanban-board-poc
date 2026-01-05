import Box from "../ui/Box";
import { useState } from "react";

function BoardOption({ title, selected }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        color="white"
        border="none"
        padding="6px 8px"
        borderRadius="8px"
        margin="4px 0px"
        backgroundColor={isHovered ? "#86a1b5" : "transparent"}
        transition={isHovered ? "background-color 0.2s ease-in-out" : ""}
        boxShadow={isHovered ? "0 8px 16px rgba(0, 0, 0, 0.3)" : ""}
      >
        <p style={{ fontWeight: selected ? "bold" : "lighter", margin: "2px" }}>
          {title}
        </p>
      </Box>
    </div>
  );
}

export default BoardOption;
