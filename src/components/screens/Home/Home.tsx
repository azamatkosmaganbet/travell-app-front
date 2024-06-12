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
    store.getCities();
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
        title="1000 вдохновляющих путеводителей почти по всему миру 🌎"
        data={store.guides}
      />
      <Info />
      <TourmateList
        title="Путешественники любят Go Trip ❤️ С 2024 года мы хотим провести больше 3000 путешествий."
        data={store.guides}
      />
      <TourmateList
        type="city"
        title="Go Trip доступен в разных городах на всех континентах 🌎"
        data={store.cities}
      />
    </>
  );
};

export default observer(Home);
