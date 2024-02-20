import React, { useContext, useEffect, useState } from "react";
import "./Main.scss";
import { observer } from "mobx-react-lite";
import UserService from "../../services/UserService";
import Login from "../Login/Login";
import { Spinner } from "react-bootstrap";
import { IUser } from "../../models/IUser";
import { Context } from "../..";
const Main = () => {
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
    <div className="d-flex flex-column align-items-center">
      <h1>
        {store.isAuth
          ? `Пользователь авторизован ${store.user.email}`
          : "Авторизуйтесь"}
      </h1>
      <h1>
        {store.user.isActivated
          ? "Аккаунт подтвержден по почте"
          : "ПОДТВЕРДИТЕ АККАУНТ!!!!"}
      </h1>
      <button
        onClick={() => {
          store.logout();
        }}
      >
        Выйти
      </button>
      <div>
        <button onClick={getUsers}>Получить пользователей</button>
      </div>
      {users.map((user) => (
        <div key={user.email}>{user.email}</div>
      ))}
    </div>
  );
};

export default observer(Main);
