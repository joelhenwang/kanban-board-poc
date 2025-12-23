import "./App.css";
import { useState, useEffect } from "react";
import Task from "./components/Task/Task";
import Column from "./components/Column/Column";
import TaskForm from "./components/TaskForm/TaskForm";
import { useKanban } from "./hooks/useKanban"; // Import your hook

function App() {
  const { tasks, addTask, deleteTask, moveTask } = useKanban();

  // 1. Theme State
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. Toggle Function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // 3. Effect: Update the Body class when state changes
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="kanban-board">
        <header>
          <h1>My kanban</h1>
          <button className="theme-toggler" onClick={toggleTheme}>
            {isDarkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </header>
        <div className="columns-board">
          <Column
            title="Todo"
            onDrop={(taskId) => moveTask(Number(taskId), "todo")}
          >
            {/* Interesting engineering to call a function with a setState function as a callable */}
            {/*
              In order to avoid an infinte loop of rendering (JS will run immediatelly the function inside 'onClick'),
              we use an 'arrow function' so that React runs the code inside 'onClick' after it is clicked
            */}
            <TaskForm onAdd={addTask} />

            {tasks
              .filter((t) => t.status === "todo")
              .map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  prio={task.prio}
                  status={"todo"}
                  onDelete={() => deleteTask(task.id, "todo")}
                  onMoveRight={() => moveTask(task.id, "inProgress")}
                ></Task>
              ))}
          </Column>

          <Column
            title="In Progress"
            onDrop={(taskId) => moveTask(Number(taskId), "inProgress")}
          >
            {tasks
              .filter((t) => t.status === "inProgress")
              .map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  prio={task.prio}
                  status={"inProgress"}
                  onMoveLeft={() => moveTask(task.id, "todo")}
                  onDelete={() => deleteTask(task.id, "inProgress")}
                  onMoveRight={() => moveTask(task.id, "complete")}
                ></Task>
              ))}
          </Column>

          <Column
            title="Completed"
            onDrop={(taskId) => moveTask(Number(taskId), "complete")}
          >
            {tasks
              .filter((t) => t.status === "complete")
              .map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  prio={task.prio}
                  status={"complete"}
                  onMoveLeft={() => moveTask(task.id, "inProgress")}
                  onDelete={() => deleteTask(task.id, "complete")}
                ></Task>
              ))}
          </Column>
        </div>
      </div>
    </>
  );
}

export default App;
