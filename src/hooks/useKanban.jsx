import { useState, useEffect } from "react";
import get_dummy_data from "../assets/dummy"; // Adjust path if needed

export function useKanban() {
  const loadData = () => {
    const savedData = localStorage.getItem("kanban-board");
    return savedData ? JSON.parse(savedData).tasks : get_dummy_data().tasks;
  };

  const [tasks, setTasks] = useState(loadData);

  useEffect(() => {
    localStorage.setItem("kanban-board", JSON.stringify({ tasks }));
  }, [tasks]);

  function addTask(title, prio) {
    const newTask = {
      id: Date.now(),
      title,
      prio,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function moveTask(taskId, newStatus) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  }

  // Return the "Public Interface"
  return {
    tasks,
    addTask,
    deleteTask,
    moveTask,
  };
}
