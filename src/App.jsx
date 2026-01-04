import "./App.css";
import { useState, useEffect } from "react";
import Task from "./components/Task/Task";
import Column from "./components/Column/Column";
import TaskForm from "./components/TaskForm/TaskForm";
import Box from "./components/ui/Box";
import BoardPage from "./BoardPage/BoardPage";
import Card from "./components/ui/Card";
import Sidebar from "./components/Sidebar/Sidebar"; // Import Sidebar component
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

  const appBgStyle =
    "linear-gradient(180deg,rgba(50, 50, 50, 1) 0%, rgba(24, 24, 24, 1) 50%,rgba(40, 40, 40, 1) 100%)";

  return (
    <div>
      <Box
        display="flex"
        flexDirection="row"
        borderStyle="none"
        height="96.5vh"
        background={appBgStyle}
      >
        <Sidebar /> {/* Render Sidebar component */}
        <BoardPage />
      </Box>
    </div>
  );

  // return (
  //   <>
  //     <div className="kanban-board">
  //       <header>
  //         <h1>My kanban</h1>
  //         <br></br>
  //         <div
  //           style={{
  //             display: "flex",
  //             flexDirection: "row",
  //             justifyContent: "space-around",
  //             justifyItems: "center",
  //             alignContent: "space-around",
  //             width: "100%",
  //           }}
  //         >
  //           <TaskForm onAdd={addTask} />
  //           <button className="theme-toggler" onClick={toggleTheme}>
  //             {isDarkMode ? "☀️ Light" : "🌙 Dark"}
  //           </button>
  //         </div>
  //       </header>
  //       <div className="columns-board">
  //         <Column
  //           title="Todo"
  //           onDrop={(taskId) => moveTask(Number(taskId), "todo")}
  //           color="#ffb7b2"
  //         >
  //           {/* Interesting engineering to call a function with a setState function as a callable */}
  //           {/*
  //             In order to avoid an infinte loop of rendering (JS will run immediatelly the function inside 'onClick'),
  //             we use an 'arrow function' so that React runs the code inside 'onClick' after it is clicked
  //           */}

  //           {tasks
  //             .filter((t) => t.status === "todo")
  //             .map((task) => (
  //               <Task
  //                 key={task.id}
  //                 id={task.id}
  //                 title={task.title}
  //                 prio={task.prio}
  //                 status={"todo"}
  //                 onDelete={() => deleteTask(task.id, "todo")}
  //                 onMoveRight={() => moveTask(task.id, "inProgress")}
  //               ></Task>
  //             ))}
  //         </Column>

  //         <Column
  //           title="In Progress"
  //           onDrop={(taskId) => moveTask(Number(taskId), "inProgress")}
  //           color="#ffdac1"
  //         >
  //           {tasks
  //             .filter((t) => t.status === "inProgress")
  //             .map((task) => (
  //               <Task
  //                 key={task.id}
  //                 id={task.id}
  //                 title={task.title}
  //                 prio={task.prio}
  //                 status={"inProgress"}
  //                 onMoveLeft={() => moveTask(task.id, "todo")}
  //                 onDelete={() => deleteTask(task.id, "inProgress")}
  //                 onMoveRight={() => moveTask(task.id, "complete")}
  //               ></Task>
  //             ))}
  //         </Column>

  //         <Column
  //           title="Completed"
  //           onDrop={(taskId) => moveTask(Number(taskId), "complete")}
  //           color="#e2f0cb"
  //         >
  //           {tasks
  //             .filter((t) => t.status === "complete")
  //             .map((task) => (
  //               <Task
  //                 key={task.id}
  //                 id={task.id}
  //                 title={task.title}
  //                 prio={task.prio}
  //                 status={"complete"}
  //                 onMoveLeft={() => moveTask(task.id, "inProgress")}
  //                 onDelete={() => deleteTask(task.id, "complete")}
  //               ></Task>
  //             ))}
  //         </Column>
  //       </div>
  //     </div>
  //   </>
  // );
}

export default App;
