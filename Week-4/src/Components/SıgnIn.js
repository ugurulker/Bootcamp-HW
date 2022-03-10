import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import TodoForm from "./TodoForm";

const Auth = ({ setIsLogged }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState([]);

  const usernameHandle = (event) => {
    setUsername(event.target.value);
  };
  const passwordHandle = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInfo({
      username: username,
      password: password,
    });
    axios
      .post("http://localhost:80/auth/login", info)
      .then((res) => (document.cookie = `token= ${res.data.token}`))
      .catch((err) => console.log(err));
    setIsLogged(true);
  };

  return (
    <div className="background">
      <Form className="w-25 form-header">
        <h4>
          <FontAwesomeIcon icon={faUserAstronaut} /> Sign in
        </h4>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            value={username}
            type="text"
            name="username"
            id="username"
            placeholder="Enter username"
            onChange={usernameHandle}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            value={password}
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            onChange={passwordHandle}
          ></Input>
        </FormGroup>
        <Button
          onClick={submitHandler}
          className="float-end"
          color="success"
          type="submit"
        >
          Save
        </Button>
        <Link to="/signup">Don't have an account? Sign Up</Link>
      </Form>
    </div>
  );
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const SıgnIn = () => {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      setIsLogged(true);
    }
  }, []);

  return (
    <div>{isLogged ? <TodoForm /> : <Auth setIsLogged={setIsLogged} />}</div>
  );
};

export default SıgnIn;
