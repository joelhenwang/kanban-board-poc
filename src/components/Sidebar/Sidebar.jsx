import react from "react";
import Box from "../ui/Box";

function Sidebar() {
  const options = ["boards", "tasks"];

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderStyle="none"
      minWidth="230px"
      backgroundColor="#757575"
    >
      <Box border="none" backgroundColor="#181818" padding="4px 16px">
        <h3 style={{ color: "white" }}>Boards</h3>
      </Box>

      <Box border="none" backgroundColor="#181818" padding="4px 16px">
        <p style={{ color: "white" }}>Board 1</p>
        <p>Board 2</p>
      </Box>
      <div>{/* User profile */}</div>
    </Box>
  );
}

export default Sidebar;
