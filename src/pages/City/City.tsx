import React from "react";
import CityPage from "../../components/screens/CityPage/CityPage";
import { observer } from "mobx-react-lite";

const City = () => {
  return (
    <div>
      <CityPage />
    </div>
  );
};

export default observer(City);
