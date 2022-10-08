import * as React from "react";
import { green, pink } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import FolderIcon from "@mui/icons-material/Folder";
import PageviewIcon from "@mui/icons-material/Pageview";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DoneIcon from "@mui/icons-material/Done";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

const DoneButton = ({ task, taskList, setTaskList, openEdit, setOpenEdit }) => {
  const handleDeleteClick = () => {
    setTaskList((current) =>
      current.filter((toDo) => {
        return toDo.id !== task.id;
      })
    );
  };

  const handleDoneClick = () => {
    let tempArray = [...taskList];
    const index = taskList.findIndex((element) => element.id === task.id);
    console.log(tempArray[index]);
    tempArray[index].done = !tempArray[index].done;
    setTaskList(tempArray);
  };

  const handleEditClick = () => {
    setOpenEdit(true);
  };

  return (
    <Stack
      direction="row"
      justifyContent={"flex-end"}
      alignItems="center"
      spacing={1}
    >
      <IconButton
        onClick={() => {
          handleDoneClick();
        }}
      >
        <Avatar>
          <DoneIcon
            color={task.done ? "success" : "default"}
            // sx={{ "&:hover": { color: "green" } }}
          />
        </Avatar>
      </IconButton>
      <IconButton
        onClick={() => {
          handleEditClick();
        }}
      >
        <Avatar>
          <EditIcon sx={{ "&:hover": { color: "yellow" } }} />
        </Avatar>
      </IconButton>
      <IconButton
        onClick={() => {
          handleDeleteClick();
        }}
      >
        <Avatar>
          <DeleteIcon sx={{ "&:hover": { color: "red" } }} />
        </Avatar>
      </IconButton>
    </Stack>
  );
};

export default DoneButton;
