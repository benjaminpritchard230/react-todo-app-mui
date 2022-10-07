import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function ButtonAppBar({
  taskList = { taskList },
  setTaskList = { setTaskList },
}) {
  const handleDoneClick = () => {
    setTaskList((current) =>
      current.filter((task) => {
        return task.done === false;
      })
    );
  };

  const handleDeleteAllClick = () => {
    setTaskList([]);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React To-do App
          </Typography>
          <Button
            onClick={() => {
              handleDoneClick();
            }}
            color="inherit"
          >
            Delete Done
          </Button>
          <Button
            onClick={() => {
              handleDeleteAllClick();
            }}
            color="inherit"
          >
            Delete all
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
