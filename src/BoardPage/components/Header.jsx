import Menu from "./Menu";

function Header({ board_title }) {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 8,
        marginRight: 8,
        marginTop: 12,
      }}
    >
      <h1 style={{ color: "#e3f2fd", fontWeight: "normal" }}>{board_title}</h1>
      <br />
      <Menu />
      <br />
    </header>
  );
}

export default Header;
