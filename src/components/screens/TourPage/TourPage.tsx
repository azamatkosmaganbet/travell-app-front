import "./TourPage.scss";
import TourDescription from "./components/TourDescription/TourDescription";
import TourHero from "./components/TourHero/TourHero";
import TourRoute from "./components/TourRoute/TourRoute";
import { ReactComponent as Notice } from "../../../assets/icons/notice.svg";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../..";
import { useParams } from "react-router-dom";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { BASE_URL } from "../../../constants/api";
import TourPrice from "../../TourPrice/TourPrice";
const TourPage = () => {
  const { store } = useContext(Context);
  const { id } = useParams();
  const [show, setShow] = useState(false);
  const [date, setDate] = useState<string>("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (id) {
      store.getTripById(id);
    }
  }, [id, store]);

  // if (store.isLoading) {
  //   return (
  //     <div style={{ height: "100vh" }} className="text-center mt-4">
  //       <Spinner className="text-primary" />
  //     </div>
  //   );
  // }

  const onSubmit = () => {
    let data = {
      date: date,
      name: store.user.name,
      city: store.trip.title,
      phoneNumber: store.user.phone,
      tourId: store.trip._id,
      guideId: store.trip.guide._id,
      userId: store.user.id,
    };

    store.createBooking(data);
  };

  return (
    <div className="tour">
      <TourHero handleShow={handleShow} tour={store.trip} />
      <TourDescription isLoading={store.isLoading} tour={store.trip} />
      <TourRoute tour={store.trip} />
      <TourPrice />

      <Modal show={show} onHide={handleClose}>
        {" "}
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">
            <h1> Бронировать</h1>{" "}
            <p>
              Сейчас вы ничего не платите и ни на что не подписываетесь 😉 Эта
              форма перенесет вас в чат с локали, чтобы обсудить программу.
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ваш локали </Form.Label>
              <div className="modal-user">
                <div
                  style={{
                    backgroundImage: `url(${BASE_URL}/${store.trip.guide?.avatar})`,
                  }}
                  className="modal-user-avatar"
                ></div>
                <p>
                  {store.trip.guide?.name} {store.trip.guide?.surname}
                </p>
              </div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Где </Form.Label>
              <Form.Select aria-label="Default select example">
                <option>{store.trip.title}</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Дата </Form.Label>
              <Form.Control
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="date"
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Как с вами связаться?</Form.Label>
              <Form.Control
                value={store.user.phone}
                type="tel"
                placeholder="Ваш номер телефона"
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button
            type="submit"
            variant="btn text-white bg-orange"
            onClick={handleClose}
          >
            Забронировать
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default observer(TourPage);
