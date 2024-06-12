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
import GuidePrice from "../../GuidePrice/GuidePrice";
import Review from "../../Review/Review";
import { FaHeart } from "react-icons/fa";
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
      store.getPostById(id);
      store.getTripsByGuideId(id);
    }
  }, [id, store]);

  useEffect(() => {
    if (store.guide._id) {
      store.getReviewById(store.guide._id);
    }
  }, [store, store.guide._id]);

  useEffect(() => {
    if (store.user._id) {
      store.getReviewById(store.guide._id);
    }
  }, [store, store.guide._id]);

  if (store.isLoading) {
    return (
      <div className="text-center mt-4" style={{ height: "100vh" }}>
        <Spinner className="text-primary" />
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
                    На Go Trip с{" "}
                    {new Date(store.guide.userId?.registerDate).toLocaleString(
                      "ru-RU",
                      { month: "long" }
                    )}{" "}
                    {new Date(store.guide.userId?.registerDate).getFullYear()}
                  </p>

                  <div className="guide-profile-info__cities">
                    {store.guide.cities?.map((c) => (
                      <div
                        key={c._id}
                        className="guide-profile-info__cities-btn"
                      >
                        <h5>{c.name}</h5>
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
                        <h5>{store?.reviews?.reviews?.length}</h5>
                        <p>Отзывов</p>
                      </div>
                    </a>
                  </div>
                </div>

                <Button className="bg-orange border-0">
                  Cвязаться с Go Trip
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

          {selectedItem === "3" && <div className="post-by-user">
                <div className="b-inner">
                  {store.post.map((blog) => (
                    <div className="b-card">
                      <div className="b-card-header">
                        <div className="b-card-header-content">
                          <img src={`${BASE_URL}/${blog.author.avatar}`} />
                          <div className="b-card-header-content-info">
                            <div className="b-card-header-content-info-title">
                              <p>
                                {blog.author.name} {blog.author.surname}
                              </p>
                            </div>
                            <div className="b-card-header-content-info-desc">
                              <p>{new Date(blog.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="b-card-content">
                        <p className="b-card-content-title">{blog.title}</p>
                        <p className="b-card-content-desc">{blog.content}</p>
                      </div>

                      <div className="b-card-body">
                        {blog.images.map((image) => (
                          <div className="b-card-body-image">
                            <img src={`${BASE_URL}${image}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>} 

          {selectedItem === "4" && <Review reviews={store.reviews}/>}

          <GuidePrice />

          <div className="guide-info">
            <div className="guide-info-content">
              <Card className="guide-info-content-card">
                <Title variant="h1">
                  Исследуйте Стамбул с {store.guide.userId?.name}
                </Title>

                <div className="guide-info-content-card-desc">
                  <p>230 путешественников гуляли с этим Go Trip 🙌</p>
                </div>

                <div className="guide-info-content-card-btns">
                  <a className="guide-info-content-card-btns-link mb-btn">
                    Go Trip в Стамбул
                  </a>
                  <a className="guide-info-content-card-btns-link link-2">
                    Go Trip в Стамбул
                  </a>
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
