import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography, Grid, TextField } from "@material-ui/core";

import { Add, RotateLeft } from "@material-ui/icons";
import { useInput } from "./useInput";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  itemContainer: {
    padding: 20,
    marginTop: 10,
    textAlign: "center",
    alignContent: "center",
  },

  gridContainer: {
    alignItems: "center",
  },

  addButton: {
    alignSelf: "center",
    marginTop: 10,
  },

  clearButton: {
    marginLeft: 10,
    marginTop: 10,
  },
}));

const AddTaskForm = (props) => {
  const { addNewTask } = props;
  const classes = useStyles();
  
  const [task, handleTaskChange, resetTask] = useInput();

  const handleAddTask = () => {
    addNewTask(task);
    resetTask();
  };

  return (
    <Paper className={classes.itemContainer} elevation={2}>
      <Grid className={classes.gridContainer} container direction="row">
        <TextField
          onChange={handleTaskChange}
          value={task}
          fullWidth
          id="standard-basic"
          label="New Card Text"
        />
        <div className={classes.grow} />
        <Button
          onClick={handleAddTask}
          color="primary"
          variant="contained"
          className={classes.addButton}
          ml={"auto"}
          edge="end"
        >
          <Add />
          <Typography>Add new task</Typography>
        </Button>

        <Button
          onClick={resetTask}
          color="primary"
          variant="contained"
          className={classes.clearButton}
          ml={"auto"}
          edge="end"
        >
          <RotateLeft />
          <Typography>Reset</Typography>
        </Button>
      </Grid>
    </Paper>
  );
};

export default AddTaskForm;
