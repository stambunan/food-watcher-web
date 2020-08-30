import React, { Component, useState, ChangeEvent } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import { isCompositeComponent } from "react-dom/test-utils";

interface ILogin {
    email: string;
    password: string;
}

class Login extends React.Component<{}, ILogin> {


    constructor() {
        super({});

        this.state = {
            email: "",
            password: ""
        };
    }

    setUser(login: ILogin) {

    }

    handlePasswordChange(evt: ChangeEvent<HTMLInputElement>) {
        console.log('event is', evt);
        alert(evt.target.value);
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    render() {
        const [value, setValue] = useState<ILogin>({ email: "", password: "" });

        return (
            <div className="Login">
                {value.email} - {value.password}
                <form >
                    <FormGroup controlId="email" >
                        <label>Email</label>
                        <FormControl
                            autoFocus
                            type="email"
                            value={value.email}
                            onChange={evt => setValue({
                                ...value, 
                                email: evt.target.value
                            })}
                        />
                    </FormGroup>S
                    <FormGroup controlId="password" >
                        <label>Password</label>
                        <FormControl
                            value={value.password}
                            type="password"
                            onChange={evt => setValue({
                                ...value,
                                password: evt.target.value
                            })}
                        />
                    </FormGroup>
                    <Button block disabled type="submit">
                        Login
        </Button>
                </form>
            </div>
        );
    }
}