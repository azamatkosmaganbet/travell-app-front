import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Box,
  Button,
  Image,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { Context } from "../..";
import { ITrip } from "../../models/ITrip";
import { observer } from "mobx-react-lite";
import { BASE_URL } from "../../constants/api";

const EditTour = () => {
  const [tour, setTour] = useState<Partial<ITrip>>({
    title: "",
    description: "",
    day: 1,
    image: ""
  });
  const [file, setFile] = useState<File | null>(null);
  const { store } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      store.getTripById(id).then(() => {
        setTour({
          title: store.trip.title,
          description: store.trip.description,
          day: store.trip.day,
        });
      });
    }
  }, [id, store]);

   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
     const file2 = e.target.files && e.target.files[0];
     setFile(file2 || null);
     console.log(file);
   };

  const changeHandler = (fields: Partial<ITrip>) => {
    setTour((prev) => {
      return { ...prev, ...fields };
    });
  };

  const submitTripHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id) {
      await store.updateTripById(id, tour);
    }
  };

  return (
    <div className="main container">
      <form onSubmit={submitTripHandler}>
        <FormControl marginTop={{ base: "20px" }}>
          <FormLabel>Название</FormLabel>
          <Input
            type="text"
            value={tour.title}
            onChange={(e) => {
              changeHandler({ title: e.target.value });
            }}
            name="title"
            bg={"#fff"}
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl marginTop={{ base: "20px" }}>
          <FormLabel>Описание</FormLabel>
          <Textarea
            value={tour.description}
            onChange={(e) => {
              changeHandler({ description: e.target.value });
            }}
            height={"400"}
            bg={"#fff"}
            name="description"
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <FormControl marginTop={{ base: "20px" }}>
          <FormLabel>Количество дней</FormLabel>
          <Input
            type="number"
            value={tour.day}
            onChange={(e) => {
              changeHandler({ day: parseInt(e.target.value, 10) });
            }}
            bg={"#fff"}
            name="day"
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>
        <Box marginTop={{ base: "20px" }}>
          <Image
            src={`${BASE_URL}/trips/${store.trip.image}`}
            alt="Dan Abramov"
          />
        </Box>
        <FormControl marginTop={{ base: "20px" }}>
          <FormLabel>Картинка</FormLabel>
          <Input
            type="file"
            // value={tour.day}
            // onChange={(e) => {
            //   changeHandler({ day: parseInt(e.target.value, 10) });
            // }}
            accept="*image"
            multiple
            onChange={handleFileChange}
            bg={"#fff"}
            variant="flushed"
            name="day"
          />
          {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
        </FormControl>

        <Box marginTop={{ base: "30px" }}>
          <Button type="submit" colorScheme="teal" size="lg">
            Подтвердить
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default observer(EditTour);
