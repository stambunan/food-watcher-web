import React, { Component, useState, FormEvent } from "react";
import { Button, FormGroup, FormControl, Form } from "react-bootstrap";
import "./Login.css";

interface ILoginState {
  email: string;
  password: string;
}

const Login: React.FC<{}> = (props) => {
  const [login, setLogin] = useState<ILoginState>({
    email: "",
    password: "",
  });
  const [validated, setValidated] = useState(false);

  const validateForm = () => {
    if (login.email.length > 0 && login.password.length > 0) {
      alert("success");
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="Login">
      Stuff: {login.email} - {login.password}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <FormGroup controlId="email">
          <Form.Label>Email</Form.Label>
          <FormControl
            autoFocus
            required
            type="email"
            value={login.email}
            onChange={(evt) => setLogin({ ...login, email: evt.target.value })}
          />
          <Form.Control.Feedback type="invalid">
            Please enter a valid e-mail.
          </Form.Control.Feedback>
        </FormGroup>
        S
        <FormGroup controlId="password">
          <Form.Label>Password</Form.Label>
          <FormControl
            value={login.password}
            type="password"
            required
            onChange={(evt) =>
              setLogin({ ...login, password: evt.target.value })
            }
          />
          <Form.Control.Feedback type="invalid">
            Please enter a password
          </Form.Control.Feedback>
        </FormGroup>
        <Button block type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default Login;
