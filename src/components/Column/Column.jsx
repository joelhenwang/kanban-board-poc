import Box from "../ui/Box";

function Column(props) {
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    const taskId = e.dataTransfer.getData("taskId");

    props.onDrop(taskId);
  }

  const columnUpperBarColorStyle = {
    "--upperBarColor": props.color,
  };

  return (
    <Box width="100%" maxWidth="30vw" backgroundColor="#757575">
      {/* <div
        className="column"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={columnUpperBarColorStyle}
      >
      </div>*/}

      <h3 style={{ marginLeft: 12, color: "white", fontWeight: "lighter" }}>
        {props.title}
      </h3>

      <div
        className="content"
        style={{
          display: "flex",
          flexDirection: "column",
          overflowX: "hidden",
          overflowY: "scroll",
          maxHeight: "100%",
        }}
      >
        {props.children}
      </div>
    </Box>
  );
}

export default Column;
