import React, { useContext, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import Sms from "../../assets/test/sms.png";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { toast } from "react-toastify";
const Verification = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  if (store.user.isActivated) {
    return (
      <div>
        <h1>Вы успешно верфицировали свой аккаунт !!!</h1>
      </div>
    );
  }

  return (
    <div className="main">
      <div className="container-xxl">
        <div className="d-flex justify-content-center align-items-center">
          <div className="">
            <img src={Sms} alt="Сообщение" />
          </div>
          <div className="d-flex flex-column">
            <h1 className="text-blue">You are almost there !</h1>
            <p>Just one more step to get started</p>
            <Button className="w-100">Activate your account</Button>
            <p className="my-4">
              Didn’t you receive the code? <span>Send it again</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Verification);
