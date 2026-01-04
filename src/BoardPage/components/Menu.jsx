import MenuOption from "./MenuOption";

function Menu() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          flexGrow: 1,
          marginLeft: 2,
        }}
      >
        <MenuOption title="Kanban" selected />
        <MenuOption title="Tasks" />
        <MenuOption title="AI" />
      </div>
    </div>
  );
}

export default Menu;
