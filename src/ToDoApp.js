import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, Delete, Add } from "@material-ui/icons";
import ToDoItem from "./ToDoItem";
import AddTaskForm from "./AddTaskForm";

const useStyles = makeStyles((theme) => ({
  appContainer: {
    marginTop: 20,
  },
  grow: {
    flexGrow: 1,
  },
  itemContainer: {
    padding: 20,
  },

  gridContainer: {
    alignItems: "center",
  },
}));

function ToDoApp() {
  const classes = useStyles();
  const [tasks, setTasks] = useState([]);

  // useEffect(() => {
  //   if (tasks.length > 0) localStorage.setItem("tasks", tasks);
  // }, [tasks]);

  const addNewTask = (taskText) => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        task: taskText,
        complete: false,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    const updateTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updateTasks);
  };

  return (
    <Container maxWidth="sm" className={classes.appContainer}>
      {tasks.map((task) => {
        return <ToDoItem key={task.id} deleteTask={deleteTask} task={task} />;
      })}

      <AddTaskForm addNewTask={addNewTask} />
    </Container>
  );
}

export default ToDoApp;
