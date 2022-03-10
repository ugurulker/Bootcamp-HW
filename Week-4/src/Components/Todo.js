import { Button } from "reactstrap";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ text, todo, todos, setTodos }) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
      setTodos(todos.map((item) => {
        if(item.id === todo.id){
          return {
            ...item, completed: !item.completed
          }
        }
        return item;
      }))
    }
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : '' }`}>
        {text}{" "}
        <Button onClick={completeHandler} className="complete-btn m-2">
          <FontAwesomeIcon icon={faCheck} />
        </Button>
        <Button onClick={deleteHandler} className="trash-btn">
          <FontAwesomeIcon icon={faTrash} />
        </Button>
      </li>
    </div>
  );
};

export default Todo;
