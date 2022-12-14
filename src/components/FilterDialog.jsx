import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FilterDialog({
  openFilter,
  setOpenFilter,
  taskList,
  setTaskList,
  setFilterText,
}) {
  const handleFilter = (e) => {
    e.preventDefault();
    setOpenFilter(false);
    console.log(e.target[0].value);
    setFilterText(e.target[0].value);
  };
  const handleCancel = () => {
    setOpenFilter(false);
  };

  return (
    <div>
      <Dialog open={openFilter}>
        <form onSubmit={handleFilter}>
          <DialogTitle>Filter tasks by name</DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Filter tasks"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </Button>
            <Button type="submit">Filter tasks</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
