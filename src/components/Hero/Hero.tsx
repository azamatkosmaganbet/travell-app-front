import "./Hero.scss";
import { CiSearch } from "react-icons/ci";
import HeroImage from "../../assets/test/hero.png";
import { FloatingLabel, Form, Modal } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { Context } from "../..";
import { debounce } from "lodash";
import { FaLocationDot, FaUser } from "react-icons/fa6";
import { ISearch } from "../../models/ISearch";
import { observer } from "mobx-react-lite";
const Hero = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [results, setResults] = useState<ISearch>();
  const { store } = useContext(Context);

  const debouncedSearch = debounce(async (searchText) => {
    if (searchText) {
      store.search(searchText);
    }
  }, 300);

  useEffect(() => {
    debouncedSearch(text);
    // Очистка функции debounce при размонтировании компонента
    return () => {
      debouncedSearch.cancel();
    };
  }, [text]);

  console.log(results);

  return (
    <div className="hero">
      <div className="hero-wrapper">
        <picture className="hero-picture">
          <img
            alt="Найти турмейта"
            src={
              "https://res.cloudinary.com/localie/image/upload/f_auto,w_1400,,dpr_1.0/v1593608071/content/landing/landingbg_mirrored.jpg"
            }
          />
        </picture>
      </div>
      <div className="hero-content">
        <div className="hero-content-inner">
          <h1>
            Открывайте новые города <br /> с местными жителями.
          </h1>
          <p className="hero-content-inner-desc">
            Путеводитель покажут свои города так, будто вы приехали в гости к другу.
          </p>
          <div onClick={handleShow}  className="hero-search">
            <div className="hero-search-content">
              <p>Куда отправимся сегодня?</p>
            </div>
            <button className="btn-search">
              <span>
                <CiSearch />
              </span>
              Найти Путеводителя
            </button>

            <button className="mb-btn-search">
              <CiSearch />
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="modal-header modal-res-header" closeButton>
          <Modal.Body className="modal-review-body modal-res-body">
            <form>
              <FloatingLabel
                controlId="floatingInput"
                label="Страна, город или интересующая вас тема"
                className="mb-3"
              >
                <Form.Control
                  name="text"
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                  type="text"
                  placeholder=""
                />
              </FloatingLabel>
            </form>
            <div>
              <p></p>
              <div className="res-list">
                {store.result?.cities?.map((result, index) => (
                  <a key={index} href={`city/${result._id}`}>
                    <div className="res-loc">
                      <FaLocationDot />
                    </div>
                    <p>{result.name}</p>
                  </a>
                ))}

                {store.result?.guides?.map((result, index) => (
                  <a href={`guide/${result._id}`} key={index}>
                    <div className="res-loc">
                      <FaUser />
                    </div>
                    <p>{result.name}</p>
                  </a>
                ))}
              </div>
            </div>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default observer(Hero);
