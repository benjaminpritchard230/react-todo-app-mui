import "./App.css";
import BasicGrid from "./components/Grid";
import FloatingActionButtons from "./components/Fab";
import FormDialog from "./components/FormDialog";
import { useState, useEffect } from "react";
import FilterDialog from "./components/FilterDialog";
function App() {
  const [taskList, setTaskList] = useState([
    {
      name: "Eat food",
      done: true,
      id: 123,
    },
    { name: "Walk dog", done: false },
  ]);
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    const filtered = taskList.filter((task) => {
      return task.name.toLowerCase().includes(filterText.toLowerCase());
    });
    console.log(filtered);
    setFilteredList(filtered);
  }, [filterText]);

  return (
    <>
      <div className="app">
        <BasicGrid
          taskList={taskList}
          filteredList={filteredList}
          setTaskList={setTaskList}
          filterText={filterText}
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
      </div>
      <FloatingActionButtons
        setOpen={setOpen}
        setOpenFilter={setOpenFilter}
        filterText={filterText}
        setFilterText={setFilterText}
      />
    </>
  );
}

export default App;
