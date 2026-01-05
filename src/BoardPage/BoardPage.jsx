import Box from "../components/ui/Box";
import Column from "../components/Column/Column";
import Card from "../components/ui/Card";
import Kanban from "./components/Kanban";
import Header from "./components/Header";

function BoardPage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        marginLeft: 16,
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Header board_title="Board 1" />
      <Kanban />
    </div>
  );
}

export default BoardPage;
