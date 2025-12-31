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
    <Box width="100%" maxWidth="30vw">
      {/* <div
        className="column"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={columnUpperBarColorStyle}
      >
      </div>*/}

      <h3>{props.title}</h3>

      <div className="content">{props.children}</div>
    </Box>
  );
}

export default Column;
