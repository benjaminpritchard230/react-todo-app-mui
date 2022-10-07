import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { v4 as uuidv4 } from "uuid";

export default function FormDialog({ open, setOpen, taskList, setTaskList }) {
  const id = uuidv4();
  const date = new Date().toISOString().slice(0, 10);

  const handleCancelClick = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    console.log(e.target[0].value);
    let name = e.target[0].value;
    if (name) {
      setTaskList([
        ...taskList,
        {
          name: name,
          date: date,
          id: id,
          done: false,
        },
      ]);
    }
  };
  return (
    <div>
      <Dialog open={open}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Enter task name</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Task name"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCancelClick();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Create task</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
