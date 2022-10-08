import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import BasicCard from "./TaskCard";
import ButtonAppBar from "./AppBar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid({
  taskList,
  setTaskList,
  filterText,
  filteredList,
  theme,
  setTheme,
}) {
  const createCards = () => {
    let cardsArray = [];
    taskList.forEach((task, index) => {
      cardsArray.push(
        <Grid xs={12} md={6} lg={4}>
          <Item>
            <BasicCard
              task={task}
              key={index}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </Item>
        </Grid>
      );
    });
    return cardsArray;
  };

  const createFilteredCards = () => {
    let cardsArray = [];
    filteredList.forEach((task, index) => {
      cardsArray.push(
        <Grid xs={12} md={6} lg={4}>
          <Item>
            <BasicCard
              task={task}
              key={index}
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </Item>
        </Grid>
      );
    });
    return cardsArray;
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, minWidth: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <ButtonAppBar
              taskList={taskList}
              setTaskList={setTaskList}
              theme={theme}
              setTheme={setTheme}
            />
          </Grid>
          {filterText ? createFilteredCards() : createCards()}
        </Grid>
      </Box>
    </>
  );
}
