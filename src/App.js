import "./App.css";
import BasicGrid from "./components/Grid";
import FloatingActionButtons from "./components/Fab";
import FormDialog from "./components/FormDialog";
import { useState } from "react";
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

  return (
    <div className="app">
      <BasicGrid taskList={taskList} setTaskList={setTaskList} />
      <FloatingActionButtons setOpen={setOpen} />
      <FormDialog
        open={open}
        setOpen={setOpen}
        taskList={taskList}
        setTaskList={setTaskList}
      />
    </div>
  );
}

export default App;
