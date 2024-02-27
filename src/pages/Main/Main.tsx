import { observer } from "mobx-react-lite";
import "./Main.scss";

import Home from "../../components/screens/Home/Home";
const Main = () => {
  return (
    <div className="main container">
      <Home />
    </div>
  );
};

export default observer(Main);
