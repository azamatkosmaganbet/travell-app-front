import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { MdOutlineVerified } from "react-icons/md";
import { useParams } from "react-router-dom";
import { Context } from "../../..";
import { BASE_URL } from "../../../constants/api";
import { Card, CardItem } from "../../UI/Card/Card";
import { Title } from "../../UI/Title/Title";
import "./Guide.scss";
import Trip from "./components/Trip/Trip";
import About from "./components/About/About";
const Guide = () => {
  const { store } = useContext(Context);
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState<string>("1"); // начальный выбранный элемент

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    if (id) {
      store.getGuideById(id);
      store.getTripsByGuideId(id);
    }
  }, [id, store]);

  if (store.isLoading) {
    return (
      <div className="text-center">
        <Spinner className="bg-blue" />
      </div>
    );
  }

  return (
    <>
      {store.guide && (
        <div className="">
          <div className="guide-profile">
            <div className="guide-profile-avatar">
              <div className="guide-profile-avatar-inner">
                <picture className="guide-profile-avatar-inner__picture">
                  <img
                    src={`${BASE_URL}/${store.guide.userId?.avatar}`}
                    alt={store.guide.userId?.name}
                  />
                </picture>
              </div>
            </div>

            <div className="guide-profile-info">
              <div className="guide-profile-info__inner">
                <div className="guide-profile-info__inner-data">
                  <div className="guide-profile-info__name">
                    <h4>{store.guide.userId?.name}</h4>
                    {store.guide.userId?.isActivated && (
                      <MdOutlineVerified fill="rgba(0, 153, 153, 0.6)" />
                    )}
                  </div>

                  <p className="guide-profile-info__desc">
                    {store.guide?.description}
                  </p>
                  <p className="guide-profile-info__date">
                    На Локали с{" "}
                    {new Date(store.guide.userId?.registerDate).toLocaleString(
                      "ru-RU",
                      { month: "long" }
                    )}{" "}
                    {new Date(store.guide.userId?.registerDate).getFullYear()}
                  </p>

                  <div className="guide-profile-info__cities">
                    {store.guide.cities?.map((c) => (
                      <div key={c} className="guide-profile-info__cities-btn">
                        <h5>{c}</h5>
                      </div>
                    ))}
                  </div>

                  <div className="guide-profile-info__followers">
                    <div className="guide-profile-info__followers-l">
                      <h5>230</h5>
                      <p>Путешественников</p>
                    </div>

                    <a>
                      <div className="guide-profile-info__followers-r">
                        <h5>31</h5>
                        <p>Отзывов</p>
                      </div>
                    </a>
                  </div>
                </div>

                <Button className="bg-orange border-0">
                  Cвязаться с локали
                </Button>
              </div>
            </div>
          </div>

          <div className="guide-profile-nav">
            <div className="guide-profile-nav-list">
              <li
                className={`guide-profile-nav-list-li ${
                  selectedItem !== "1" && "li-secondary"
                }`}
                onClick={() => handleItemClick("1")}
              >
                {selectedItem === "1" && (
                  <div className="guide-profile-nav-list-li-line"></div>
                )}
                <span>Обо мне</span>
              </li>
              <li
                onClick={() => handleItemClick("2")}
                className={`guide-profile-nav-list-li ${
                  selectedItem !== "2" && "li-secondary"
                }`}
              >
                {selectedItem === "2" && (
                  <div className="guide-profile-nav-list-li-line"></div>
                )}
                <span>Трипы</span>
              </li>
              <li
                onClick={() => handleItemClick("3")}
                className={`guide-profile-nav-list-li ${
                  selectedItem !== "3" && "li-secondary"
                }`}
              >
                {selectedItem === "3" && (
                  <div className="guide-profile-nav-list-li-line"></div>
                )}
                <span>Истории</span>
              </li>
              <li
                onClick={() => handleItemClick("4")}
                className={`guide-profile-nav-list-li ${
                  selectedItem !== "4" && "li-secondary"
                }`}
              >
                {selectedItem === "4" && (
                  <div className="guide-profile-nav-list-li-line"></div>
                )}
                <span>Отзывы</span>
              </li>
            </div>
          </div>
          {selectedItem === "1" && <About guide={store.guide} />}

          {selectedItem === "2" && <Trip trips={store.trips} />}

          <div className="guide-price">
            <div className="guide-price-content">
              <Title
                variant="h2"
                color="#fff"
                className="guide-price-content-title"
              >
                Не важно, какого локали Вы выберете и куда отправитесь в
                путешествие. Цена — едина.
              </Title>

              <p className="guide-price-content-desc">
                Необязательно выбирать только одну конкретную прогулку из
                списка. Локали с удовольствием подберет для вас персональную
                программу, которая может быть сложена сразу из нескольких
                прогулок. А может вы получите вовсе что-то эксклюзивное и
                секретное, чего нет на сайте! Насчет стоимости переживать не
                стоит - все просто и прозрачно. Итоговая цена сложится
                автоматически, отталкиваясь от единого тарифа:
              </p>

              <div className="guide-price-content-cards">
                <Card
                  className="guide-price-content-cards-item"
                  type="price"
                  color="rgb(255, 203, 56)"
                >
                  <CardItem
                    title="Полдня"
                    description="Чаще всего, 3-4 часа"
                    variant="price"
                    price={99}
                  />
                </Card>

                <Card
                  className="guide-price-content-cards-item"
                  type="price"
                  color="rgb(255, 203, 56)"
                >
                  <CardItem
                    title="Полдня"
                    description="Чаще всего, 3-4 часа"
                    variant="price"
                    price={99}
                  />
                </Card>

                <Card
                  className="guide-price-content-cards-item"
                  type="price"
                  color="rgb(255, 203, 56)"
                >
                  <CardItem
                    title="Полдня"
                    description="Чаще всего, 3-4 часа"
                    variant="price"
                    price={99}
                  />
                </Card>
              </div>
            </div>
          </div>

          <div className="guide-info">
            <div className="guide-info-content">
              <Card className="guide-info-content-card">
                <Title variant="h1">
                  Исследуйте Стамбул с {store.guide.userId?.name}
                </Title>

                <div className="guide-info-content-card-desc">
                  <p>230 путешественников гуляли с этим локали 🙌</p>
                </div>

                <div className="guide-info-content-card-btns">
                  <Button className="w-100 me-2 bg-dark border-0">
                    Локали в Стамбул
                  </Button>
                  <Button className="w-100 bg-orange border-0">
                    Локали в Стамбул
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default observer(Guide);
