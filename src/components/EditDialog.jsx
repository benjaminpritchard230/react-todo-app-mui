import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function EditDialog({
  openEdit,
  setOpenEdit,
  task,
  taskList,
  setTaskList,
  editText,
  setEditText,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target[0].value) {
      let tempArray = [...taskList];
      const index = taskList.findIndex((element) => element.id === task.id);
      console.log(tempArray[index]);
      tempArray[index].name = e.target[0].value;
      setTaskList(tempArray);
    }
    setOpenEdit(false);
  };

  const handleCancelClick = () => {
    setOpenEdit(false);
  };

  return (
    <div>
      <Dialog open={openEdit}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Edit task name</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="New name"
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
            <Button type="submit">Edit task</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
