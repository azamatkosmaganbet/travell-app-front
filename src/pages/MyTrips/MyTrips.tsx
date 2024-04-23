import React, { useContext, useEffect } from "react";
import { Context } from "../..";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Trip from "../../components/screens/Guide/components/Trip/Trip";
import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

const MyTrips = () => {
  const { store } = useContext(Context);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      store.getGuideById(id);
      store.getTripsByGuideId(id);
    }
  }, [id, store]);

  if (store.isLoading) {
    return (
      <div className="text-center mt-4" style={{ height: "100vh" }}>
        <Spinner className="text-primary" />
      </div>
    );
  }

  return (
    <div className="main container">
      <Box p={{md: 12}}>
        <Trip trips={store.trips} />
      </Box>
    </div>
  );
};

export default observer(MyTrips);
