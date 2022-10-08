import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneButton from "./DoneButton";
import EditDialog from "./EditDialog";
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({
  task,
  taskList,
  setTaskList,
  openEdit,
  setOpenEdit,
}) {
  const [editText, setEditText] = useState("");
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant={"h5"}>{task.name}</Typography>
        <Typography variant={"h6"}>{task.date}</Typography>
      </CardContent>
      <CardActions>
        <DoneButton
          task={task}
          taskList={taskList}
          setTaskList={setTaskList}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
        />
      </CardActions>
      <EditDialog
        openEdit={openEdit}
        setOpenEdit={setOpenEdit}
        task={task}
        taskList={taskList}
        setTaskList={setTaskList}
        editText={editText}
        setEditText={setEditText}
      />
    </Card>
  );
}
