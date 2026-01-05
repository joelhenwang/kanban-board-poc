import Column from "../../components/Column/Column";
import Card from "../../components/ui/Card";

function Kanban() {
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
      <Column title="To Do">
        <Card title="Card Title" prio="High" data={{ author: "John Doe" }} />
      </Column>
      <Column title="In Progress">
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

      <Column title="Done">
        <Card title="Card Title" prio="Low" data={{ author: "John Doe" }} />
      </Column>
    </div>
  );
}

export default Kanban;
