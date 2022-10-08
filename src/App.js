import "./App.css";
import BasicGrid from "./components/Grid";
import FloatingActionButtons from "./components/Fab";
import FormDialog from "./components/FormDialog";
import { useState, useEffect } from "react";
import FilterDialog from "./components/FilterDialog";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const date = new Date().toISOString().slice(0, 10);
  const [taskList, setTaskList] = useState([
    {
      name: "Eat food",
      done: true,
      id: 123,
      date: date,
    },
    { name: "Walk dog", done: false, id: 456, date: date },
  ]);

  const lightTheme = createTheme({
    palette: {
      primary: {
        main: "#0057b7",
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const filtered = taskList.filter((task) => {
      return task.name.toLowerCase().includes(filterText.toLowerCase());
    });
    console.log(filtered);
    setFilteredList(filtered);
  }, [filterText]);

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <BasicGrid
        taskList={taskList}
        filteredList={filteredList}
        setTaskList={setTaskList}
        filterText={filterText}
        theme={theme}
        setTheme={setTheme}
      />
      <FormDialog
        open={open}
        setOpen={setOpen}
        taskList={taskList}
        setTaskList={setTaskList}
        setFilterText={setFilterText}
      />
      <FilterDialog
        open={openFilter}
        setOpenFilter={setOpenFilter}
        taskList={taskList}
        setTaskList={setTaskList}
        setFilterText={setFilterText}
      />
      <FloatingActionButtons
        setOpen={setOpen}
        setOpenFilter={setOpenFilter}
        filterText={filterText}
        setFilterText={setFilterText}
      />{" "}
    </ThemeProvider>
  );
}

export default App;
