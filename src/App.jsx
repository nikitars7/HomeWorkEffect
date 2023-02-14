import { useState, useEffect } from "react";
import "./App.css";
import ToDoList from "./Components/ToDoList";

function App() {
  const [usersToDo, setUsersToDo] = useState([]);
  useEffect(() => {
    const getUsersToDo = () => {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res) => res.json())
        .then((data) => setUsersToDo(data));
    };
    getUsersToDo();
  }, []);
  return (
    <div className="App">
      <ToDoList usersToDo={usersToDo} />
    </div>
  );
}

export default App;
