import Column from "../../components/Column/Column";
import Card from "../../components/ui/Card";
import Modal from "../../components/ui/Modal";
import { useState } from "react";
function Kanban() {
  const [isAdding, setIsAdding] = useState(false);

  function onAddClick() {
    setIsAdding(true);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexGrow: 1,
        width: "100%",
        height: "100%",
        minHeight: 0,
        overflow: "hidden",
      }}
    >
      <Column title="To Do" onAddClick={onAddClick}>
        <Card title="Card Title" prio="High" data={{ author: "John Doe" }} />
      </Column>
      <Column title="In Progress" onAddClick={onAddClick}>
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
        <Card title="Card Title" prio="Medium" data={{ author: "John Doe" }} />
      </Column>

      <Column title="Done" onAddClick={onAddClick}>
        <Card title="Card Title" prio="Low" data={{ author: "John Doe" }} />
      </Column>
      <Modal
        isOpen={isAdding}
        onClose={() => setIsAdding(false)}
        title="Create New Task"
      >
        <input type="text" placeholder="What needs to be done?" />
        <button>Save Task</button>
      </Modal>
    </div>
  );
}

export default Kanban;
