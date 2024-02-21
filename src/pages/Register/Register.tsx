import React, { useContext, useState } from "react";
import { Context } from "../..";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await store.registration(email, password, name, surname, phone);

      setEmail("");
      setName("");
      setSurname("");
      setPassword("");
      setPhone("");

      navigate("/login");
    } catch (error) {
      alert("Что то пошло не так");
    }
  };

   const handleLogin = async (googleData: any) => {
     console.log(googleData);
   };

  return (
    <div>
      <div className="container-small">
        <div className="main">
          <h1 className="text-center text-blue">Create Account</h1>

          <form className="login-form" onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email: </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                required
                value={email}
                placeholder="name@example.com"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password: </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
                type="password"
                value={password}
                placeholder="Password"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name: </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
                type="text"
                value={name}
                placeholder="Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Surname: </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
                type="text"
                value={surname}
                placeholder="Surname"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone: </Form.Label>
              <Form.Control
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="tel"
                value={phone}
                placeholder="+7 (777) 777 77 77"
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              Sign Up
            </Button>
          </form>

          <GoogleLogin
            clientId={
              "630029067406-86sadectpcmrnndhe63pnlo5t8auh3pr.apps.googleusercontent.com"
            }
            onSuccess={handleLogin}
            buttonText="Login with Google"
            cookiePolicy={"single_host_origin"}
          ></GoogleLogin>
        </div>
      </div>
    </div>
  );
};

export default Register;
