import "./Task.css";

function MoveLeft({ status, moveHandler }) {
  if (status === "todo") return null;
  return <button onClick={moveHandler}> &lt; </button>;
}

function MoveRight({ status, moveHandler }) {
  if (status === "complete") return null;
  return <button onClick={moveHandler}> &gt; </button>;
}

function Task(props) {
  return (
    <>
      <div
        className="task"
        draggable="true"
        onDragStart={(e) => {
          e.dataTransfer.setData("taskId", props.id);

          if (props.onDragStart) props.onDragStart(e);
        }}
      >
        <div className="task-header">
          <h3> The title is: {props.title} </h3>
          {/* onDelete is a prop of the component Task, the prop function callable */}
        </div>
        <p>
          {" "}
          The priority is:{" "}
          <span className="task-tag" data-prio={props.prio}>
            {props.prio}
          </span>{" "}
        </p>
        <div className="task-actions">
          {/* <MoveLeft
            status={props.status}
            moveHandler={props.onMoveLeft}
          ></MoveLeft>*/}
          <button className="delete-btn" onClick={props.onDelete}>
            {" "}
            Delete{" "}
          </button>
          {/* <MoveRight
            status={props.status}
            moveHandler={props.onMoveRight}
          ></MoveRight>*/}
        </div>
      </div>
    </>
  );
}

export default Task;
