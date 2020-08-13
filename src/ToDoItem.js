import React from "react";
import {
  Button,
  Paper,
  Typography,
  Grid,
  IconButton,
  Checkbox,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Edit, Delete } from "@material-ui/icons";
import { useToggle } from "./useToggle";
import { useInput } from "./useInput";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  itemContainer: {
    padding: 20,
    marginTop: 10,
  },

  gridContainer: {
    alignItems: "center",
  },
}));

function ToDoItem({ task, deleteTask }) {
  const classes = useStyles();
  const [isComplete, setIsComplete] = useToggle(task.complete);
  const [isEditing, setIsEditing] = useToggle(false);
  const [taskInput, handleTaskChange] = useInput(task.task);

  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <Paper className={classes.itemContainer} elevation={2}>
      <Grid className={classes.gridContainer} container direction="row">
        <Checkbox
          onChange={setIsComplete}
          checked={isComplete}
          color="primary"
        />
        {isEditing ? (
          <TextField
            onChange={handleTaskChange}
            value={taskInput}
            id="standard-basic"
          />
        ) : (
          <Typography>{taskInput}</Typography>
        )}
        <div className={classes.grow} />
        <IconButton onClick={setIsEditing} ml={"auto"} edge="end">
          <Edit />
        </IconButton>

        <IconButton onClick={handleDelete} ml={"auto"} edge="end">
          <Delete />
        </IconButton>
      </Grid>
    </Paper>
  );
}

export default ToDoItem;
