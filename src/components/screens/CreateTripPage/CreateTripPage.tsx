import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import "./CreateTripPage.scss";
import { Button, Form } from "react-bootstrap";
import { Context } from "../../..";
import { observer } from "mobx-react-lite";
import { toast } from "react-toastify";
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  extendTheme,
  useMediaQuery,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "Шаг 1", description: "Создать трип" },
  { title: "Шаг 2", description: "Маршрут" },
  { title: "Шаг 3", description: "Добавить остановку" },
];

const breakpoints = {
  base: "0px",
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const theme = extendTheme({ breakpoints });

const CreateTripPage = () => {
  const [file, setFile] = useState<File | null>(null);
  const { store } = useContext(Context);
  const [value, setValue] = useState({
    title: "",
    description: "",
    day: "1",
    city: store.cities[0]?._id,
  });

  const [route, setRoute] = useState({
    name: "",
    tripId: "",
  });

  const [stop, setStop] = useState({
    name: "",
    description: "",
    routeId: "",
  });

  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    store.getCities();
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file2 = e.target.files && e.target.files[0];
    setFile(file2 || null);
    console.log(file);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      toast.error("Картинка не загружена");
      return;
    }
    let data = {
      title: value.title,
      description: value.description,
      day: value.day,
      city: value.city,
      guide: store.user.id,
      file: file,
    };

    const trip = await store.createTrip(data);

    setActiveStep(activeStep + 1);

    localStorage.setItem("activeStep", JSON.stringify(activeStep + 1));

    setRoute({ ...route, tripId: trip._id });
  };

  const stopSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await store.createRoute(route);

    setActiveStep(activeStep + 1);

    setStop({ ...stop, routeId: res._id });
  };

  const routeSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = {
      name: stop.name,
      description: stop.description,
      image: file,
      route: stop.routeId,
    };

    const res = await store.createStop(data);

    if (!res) {
      toast.error("Что то пошло не так");
      return;
    }

    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  };
  const [isMediumScreen] = useMediaQuery("(min-width: 768px)");
  return (
    <div className="city container">
      <Stepper
        index={activeStep}
        size={"lg"}
        orientation={isMediumScreen ? "horizontal" : "vertical"}
        gap="0"
        marginBottom={{ base: "50px", lg: "0px" }}
        height={{ base: "300px", lg: "100px" }}
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Box margin={{ md: "30px" }}>
        {activeStep === 1 && (
          <>
            <div>
              <h2>Ура ! Скоро новый трип )</h2>
            </div>
            <form onSubmit={submitHandler}>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  type="text"
                  value={value.title}
                  onChange={(e) => {
                    setValue({ ...value, title: e.target.value });
                  }}
                  name="title"
                  placeholder="Придумай название для трипа"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  as="textarea"
                  value={value.description}
                  onChange={(e) => {
                    setValue({ ...value, description: e.target.value });
                  }}
                  name="description"
                  type="text"
                  placeholder="Опиши трип :)"
                />
              </Form.Group>
              <Form.Select
                onChange={(e) => {
                  setValue({ ...value, city: e.target.value });
                }}
                name="city"
                className="mb-3 mt-3"
                defaultValue={store.cities[0]?._id}
              >
                {store.cities.map((c) => (
                  <option value={c._id}>{c.name}</option>
                ))}
              </Form.Select>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  type="number"
                  value={value.day}
                  onChange={(e) => {
                    setValue({ ...value, day: e.target.value });
                  }}
                  name="day"
                  placeholder="Сколько дней будет длится трип ?"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  type="file"
                  placeholder="Картинка"
                  accept="*image"
                  multiple
                  onChange={handleFileChange}
                />
              </Form.Group>
              <Button type="submit" className="w-100">
                Создать
              </Button>
            </form>
          </>
        )}

        {activeStep === 2 && (
          <Box>
            <form onSubmit={stopSubmitHandler}>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  type="text"
                  value={route.name}
                  onChange={(e) => {
                    setRoute({ ...route, name: e.target.value });
                  }}
                  name="name"
                  placeholder="Придумай название для маршрута"
                />
              </Form.Group>
              <Button type="submit">Создать</Button>
            </form>
          </Box>
        )}

        {activeStep === 3 && (
          <Box>
            <form onSubmit={routeSubmitHandler}>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  type="text"
                  value={stop.name}
                  onChange={(e) => {
                    setStop({ ...stop, name: e.target.value });
                  }}
                  name="name"
                  placeholder="А теперь добавь остановку )"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  type="text"
                  value={stop.description}
                  onChange={(e) => {
                    setStop({ ...stop, description: e.target.value });
                  }}
                  name="description"
                  placeholder="Опиши"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  className="border-0"
                  size="lg"
                  type="file"
                  placeholder="Картинка"
                  accept="*image"
                  multiple
                  onChange={handleFileChange}
                />
              </Form.Group>

              <Button type="submit">Создать</Button>
            </form>
          </Box>
        )}
      </Box>
    </div>
  );
};

export default observer(CreateTripPage);
