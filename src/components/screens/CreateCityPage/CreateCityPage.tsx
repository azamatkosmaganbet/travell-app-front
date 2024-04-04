import React, { ChangeEvent, useContext, useState } from "react";
import "./CreateCityPage.scss";
import { Button, Form } from "react-bootstrap";
import { Context } from "../../..";
import { toast } from "react-toastify";

const CreateCityPage = () => {
  const [city, setCity] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const { store } = useContext(Context);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      toast.error("Картинка не загружена");
      return;
    }

    if (file) {
      store.createCity(city, file);
      setFile(null)
      setCity("")
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file2 = e.target.files && e.target.files[0];
    setFile(file2 || null);
  };
  return (
    <div className="city container">
      <div>
        <h2>Добавить город</h2>
      </div>
      <form onSubmit={submitHandler}>
        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            className="border-0"
            size="lg"
            value={city}
            type="text"
            placeholder="Добавить город"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
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
          Добавить
        </Button>
      </form>
    </div>
  );
};

export default CreateCityPage;
