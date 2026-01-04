function MenuOption({ title, selected = false }) {
  const selectedTextColor = selected ? { color: "#e3f2fd" } : { color: "grey" };
  const selectedBorderColor = selected
    ? { borderBottom: "3px solid #e3f2fd", padding: "0px 12px" }
    : { borderBottom: "3px solid grey", padding: "0px 12px" };

  return (
    <div style={selectedBorderColor}>
      <p style={selectedTextColor}>{title}</p>
    </div>
  );
}

export default MenuOption;
