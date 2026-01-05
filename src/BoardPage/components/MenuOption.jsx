function MenuOption({ title, selected = false }) {
  const selectedTextColor = selected ? { color: "#99c7e8" } : { color: "grey" };
  const selectedBorderColor = selected
    ? { borderBottom: "3px solid #99c7e8", padding: "0px 12px" }
    : { borderBottom: "3px solid grey", padding: "0px 12px" };

  return (
    <div style={selectedBorderColor}>
      <p style={selectedTextColor}>{title}</p>
    </div>
  );
}

export default MenuOption;
