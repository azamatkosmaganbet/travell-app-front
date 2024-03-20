import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BsBasket3 } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { ReactComponent as Chat } from "../../assets/icons/chat.svg";
import { ReactComponent as Home } from "../../assets/icons/home.svg";
import { ReactComponent as MbHome } from "../../assets/icons/home.svg";
import { ReactComponent as News } from "../../assets/icons/news.svg";
import { ReactComponent as Search } from "../../assets/icons/search.svg";
import { ReactComponent as Trip } from "../../assets/icons/trip.svg";
import { BASE_URL } from "../../constants/api";
import "./Header.scss";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<number | null>(0);

  const [isScrolled, setIsScrolled] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll = 500;
      if (window.scrollY < scroll) {
        setIsScrolled("");
      } else {
        setIsScrolled("is-sticky");
      }
    });
  }, []);

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  const { store } = useContext(Context);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkAuthentication() {
      if (localStorage.getItem("token")) {
        try {
          await store.checkAuth();
        } catch (e) {
          console.log(e);
        }
      }
      setIsLoading(false);
    }

    checkAuthentication();
  }, [store]);

  useEffect(() => {
    const path = location.pathname;

    // Логика сравнения пути с каждой ссылкой
    if (path === "/") {
      setActiveLink(0);
    } else if (path === "/register") {
      setActiveLink(1);
    } else {
      setActiveLink(null); // Сброс активной ссылки, если путь не соответствует ни одной ссылке
    }
  }, [location.pathname]);

  // if (isLoading) {
  //   return <Spinner className="text-primary" />;
  // }

  const isHomePage = location.pathname === "/";
  const isTourPage = location.pathname.startsWith("/tour/");

  return (
    <>
      <div className={classNames("header", isScrolled)}>
        <div className="header-inner">
          <div className="header-left">
            <div className="header-left-icon">
              <a href="/" className="header-left-icon-btn">
                <Home
                  style={{
                    color:
                      !isHomePage && !isTourPage ? "#000" : "hsl(0deg 0% 100%)",
                  }}
                />
              </a>

              <a href="/" className="header-left-icon-mb-btn">
                <MbHome />
              </a>
              <p>Главная</p>
            </div>

            <div className="header-left-icon">
              <button className="header-left-icon-btn">
                <Chat
                  style={{
                    color:
                      !isHomePage && !isTourPage ? "#000" : "hsl(0deg 0% 100%)",
                  }}
                />
              </button>

              <a href="/" className="header-left-icon-mb-btn">
                <Chat />
              </a>
              <p>Главная</p>
            </div>

            <div className="header-left-icon">
              <button className="header-left-icon-btn">
                <BsBasket3
                  style={{
                    color:
                      !isHomePage && !isTourPage ? "#000" : "hsl(0deg 0% 100%)",
                  }}
                />
              </button>

              <a href="/" className="header-left-icon-mb-btn">
                <BsBasket3 />
              </a>
              <p>Главная</p>
            </div>

            <div className="header-left-icon">
              <button className="header-left-icon-btn">
                <Trip
                  style={{
                    color:
                      !isHomePage && !isTourPage ? "#000" : "hsl(0deg 0% 100%)",
                  }}
                />
              </button>

              <a href="/" className="header-left-icon-mb-btn">
                <Trip />
              </a>
              <p>Главная</p>
            </div>

            <div className="header-left-icon">
              <button className="header-left-icon-btn">
                <News
                  style={{
                    color:
                      !isHomePage && !isTourPage ? "#000" : "hsl(0deg 0% 100%)",
                  }}
                />
              </button>

              <a href="/" className="header-left-icon-mb-btn">
                <MbHome />
              </a>
              <p>Главная</p>
            </div>
          </div>

          <div className="header-right">
            <button className="header-right-btn">
              <Search color="#000" fill="#000" />
            </button>

            {store.user && (
              <a
                href={`/account/${store.user.id}`}
                className="header-right-avatar"
              >
                {store.user.avatar ? (
                  <img src={`${BASE_URL}/${store.user.avatar}`} />
                ) : (
                  store.user.name
                )}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(Header);
