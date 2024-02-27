import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from "../..";
import Hero from "../../components/Hero/Hero";
import Info from "../../components/screens/Home/Info/Info";
import "./Main.scss";

import TourmateList from "../../components/TourmateList/TourmateList";
const Main = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth()
    }
  }, []);

  if (store.isLoading) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="main container">
      <Hero />
      <Info />
      <TourmateList />
      <TourmateList />
    </div>
  );
};

export default observer(Main);
