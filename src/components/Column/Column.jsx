import "./Column.css";

function Column(props) {
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    const taskId = e.dataTransfer.getData("taskId");

    props.onDrop(taskId);
  }

  return (
    <>
      <div className="column" onDragOver={handleDragOver} onDrop={handleDrop}>
        <h4>{props.title}</h4>

        <div className="content">{props.children}</div>
      </div>
    </>
  );
}

export default Column;
