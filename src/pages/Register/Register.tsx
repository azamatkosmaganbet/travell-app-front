import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../..";

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

      navigate("/verification");
    } catch (error) {
      alert("Что то пошло не так");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth().then(() => {
        navigate("/");
      });
    }
  }, [navigate, store]);

  if (store.isLoading) {
    return <Spinner />;
  }

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

            <Button type="submit" className="w-100 bg-orange border-0">
              Sign Up
            </Button>
          </form>

          <div className="text-center my-4">
            <p>
              Do you have account?{" "}
              <Link to={"/login"} className="text-warning">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
