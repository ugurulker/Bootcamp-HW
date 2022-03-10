import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import TodoList from "./TodoList";
import { Link } from "react-router-dom";

const TodoForm = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("All");
  const [filteredTodos, setFilterTodos] = useState([]);

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;

      default:
        setFilterTodos(todos);
        break;
    }
  };

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  useEffect(() => {
    filterHandler()
  }, [todos, status]);

  return (
    <div className="background">
        <h3 className="todo-list-header">Todo List</h3>
      <Form>
        <FormGroup className=" todo-form d-flex">
          <Input
            name="todoInput"
            onChange={inputTextHandler}
            value={inputText}
            type="text"
            className="todo-input w-25"
          />
          <Button
            onClick={submitTodoHandler}
            className="todo-button"
            type="submit"
          >
            <FontAwesomeIcon icon={faPlusSquare} />
          </Button>
          <select onChange={statusHandler} className="select">
            <option value="All">All</option>
            <option value="Completed">Completed</option>
            <option value="Uncompleted">Uncompleted</option>
          </select>
        </FormGroup>
      </Form>
      <TodoList filteredTodos={filteredTodos} inputText={inputText} todos={todos} setTodos={setTodos} />
      <Button className="buttonedit"> <Link className="link" to="/editcategory">Edit Category</Link></Button>
    </div>
  );
};

export default TodoForm;
