import react from "react";
import Box from "../ui/Box";

function Sidebar() {
  const options = ["boards", "tasks"];

  return (
    <Box
      display="flex"
      flexDirection="column"
      borderStyle="none"
      minWidth="300px"
    >
      <h3>Boards</h3>
      <div>
        {/* list of boards*/}
        <p>Board 1</p>
        <p>Board 2</p>
      </div>
      <div>{/* User profile */}</div>
    </Box>
  );
}

export default Sidebar;
