import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DoneButton from "./DoneButton";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ task, taskList, setTaskList }) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant={"h5"}>{task.name}</Typography>
        <Typography variant={"h6"}>{task.date}</Typography>
      </CardContent>
      <CardActions>
        <DoneButton task={task} taskList={taskList} setTaskList={setTaskList} />
      </CardActions>
    </Card>
  );
}
