import React, { useContext, useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import { Context } from "./index";
import { observer } from "mobx-react-lite";
import UserService from "./services/UserService";
import { IUser } from "./models/IUser";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";

function App() {
  const { store } = useContext(Context);
  const [users, setUsers] = useState<IUser[]>([]);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (!store.isAuth) {
    return (
      <>
        <Login /> <button onClick={getUsers}>Получить пользователей</button>
      </>
    );
  }

  async function getUsers() {
    try {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Main />} path="/" />
      <Route element={<Register />} path="/register" />
    </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
