import styles from "./ToDoList.module.css";
import { useEffect } from "react";
const ToDoList = (props) => {
  const { usersToDo, getUsersToDo } = props;
  useEffect(
    () => getUsersToDo("https://jsonplaceholder.typicode.com/comments"),
    []
  );
  return (
    <div>
      {usersToDo.map((user) => (
        <div className={styles.Users} key={user.id}>
          <p>{`Post id: ${user.postId}`}</p>
          <p>{`Name: ${user.name}`}</p>
          <p>{`Email: ${user.email}`}</p>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
