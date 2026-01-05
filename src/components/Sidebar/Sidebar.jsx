import react from "react";
import Box from "../ui/Box";
import BoardOption from "./BoardOption";

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

      <Box border="none" backgroundColor="#181818" padding="16px 8px">
        <BoardOption title="Board 1" />
        <BoardOption title="Board 1" />
        <BoardOption title="Board 1" />
        <BoardOption title="Board 1" />
      </Box>

      <div>{/* User profile */}</div>
    </Box>
  );
}

export default Sidebar;
