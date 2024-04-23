import { useState } from "react";
import CreateTripPage from "../../components/screens/CreateTripPage/CreateTripPage";
import { observer } from "mobx-react-lite";

const CreateTrip = () => {
  return (
    <>
      <CreateTripPage />
    </>
  );
};

export default observer(CreateTrip);
