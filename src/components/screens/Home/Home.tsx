import React, { useContext, useEffect } from "react";
import Hero from "../../Hero/Hero";
import Info from "./components/Info/Info";
import TourmateList from "../../TourmateList/TourmateList";
import { Context } from "../../..";
import { Spinner } from "react-bootstrap";
import { observer } from "mobx-react-lite";

const Home = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  useEffect(() => {
    store.getUsersByRole("guide");
  }, [ ]);

  if (store.isLoading) {
    return (
      <div className="text-center">
        <Spinner />
      </div>
    );
  }
  return (
    <>
      <Hero />
      <Info />
      <TourmateList
        data={store.guides}
        title="Expert guides reveal city secrets, enriching experiences."
      />
      <TourmateList
        data={store.guides}
        title="Expert guides reveal city secrets, enriching experiences."
      />
    </>
  );
};

export default observer(Home);
