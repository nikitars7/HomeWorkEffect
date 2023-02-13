import { useState } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";

function App() {
  const [usersToDo, setUsersToDo] = useState([]);
  const getUsersToDo = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsersToDo(data));
  };
  return (
    <div className="App">
      <ToDoList usersToDo={usersToDo} getUsersToDo={getUsersToDo} />
      <ToDoList usersToDo={usersToDo} getUsersToDo={getUsersToDo} />
      <ToDoList usersToDo={usersToDo} getUsersToDo={getUsersToDo} />
    </div>
  );
}

export default App;
