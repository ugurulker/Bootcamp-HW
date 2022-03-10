import alertify from "alertifyjs";
import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const SıgnIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [info, setInfo] = useState([]);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const passwordConfHandler = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (event) => {
    alertify.warning("Registration is successful!");
    event.preventDefault();
    setInfo({
      username: username,
      password: password,
      passwordConfirm: passwordConfirm,
    });
    axios
      .post("http://localhost:80/auth/register", info)
      .then((res) => {
        document.cookie = `token= ${res.data.token}`;
      })
      .catch((err) => console.log(err));

    setUsername("");
    setPassword("");
    setPasswordConfirm("");
  };

  return (
    <div className="background">
      <Form className="w-25 form-header">
        <h4>
          <FontAwesomeIcon icon={faUserAlt} /> Sign up
        </h4>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            value={username}
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={usernameHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            value={password}
            type="password"
            name="password"
            placeholder="Enter password"
            onChange={passwordHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="passwordconf">Password</Label>
          <Input
            value={passwordConfirm}
            type="password"
            name="passwordConfirm"
            placeholder="Enter password"
            onChange={passwordConfHandler}
          ></Input>
        </FormGroup>
        <Button
          onClick={handleSubmit}
          className="float-end"
          color="success"
          type="submit"
        >
          <Link className="link" to="/">
            Save
          </Link>
        </Button>
        <Link to="/">Already have an account? Sign in</Link>
      </Form>
    </div>
  );
};
export default SıgnIn;
