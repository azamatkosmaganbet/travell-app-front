import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { Context } from "../../..";
import Hero from "../../Hero/Hero";
import TourmateList from "../../TourmateList/TourmateList";
import "./Home.scss";
import Info from "./components/Info/Info";
const Home = () => {
  const { store } = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  useEffect(() => {
    store.getGuides();
  }, []);

  // if (store.isLoading) {
  //   return (
  //     <div className="text-center">
  //       <Spinner className="text-primary" />
  //     </div>
  //   );
  // }
  return (
    <>
      <Hero />
      <TourmateList
        title="1000 вдохновляющих локали почти по всему миру 🌎"
        data={store.guides}
      />
      <Info />
      <TourmateList
        title="Путешественники любят Локали ❤️ С 2018 года мы провели больше 3000 путешествий."
        data={store.guides}
      />
      <TourmateList
        type="city"
        title="Локали доступен в 350 городах на всех континентах 🌎"
        data={store.guides}
      />
    </>
  );
};

export default observer(Home);
