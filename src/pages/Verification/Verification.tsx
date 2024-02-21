import React, { useContext, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import Sms from "../../assets/test/sms.png";
import { Context } from "../..";
import { useNavigate } from "react-router-dom";
const Verification = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  if (store.isLoading) {
    return <Spinner />;
  }

  if (store.user.isActivated) {
    return <div>Вы успешно верифицировали свой аккаунт</div>;
  }

  console.log(store.user.isActivated);
  

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
            <Button className="w-100">
              <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
                {" "}
                Activate your account
              </a>
            </Button>
            <p className="my-4">
              Didn’t you receive the code? <span>Send it again</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verification;
