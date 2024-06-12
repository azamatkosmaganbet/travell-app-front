import classNames from "classnames";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { AiOutlineTeam } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import { ReactComponent as Home, ReactComponent as MbHome } from "../../assets/icons/home.svg";
import { ReactComponent as Logo } from "../../assets/icons/mb-logo.svg";
import { ReactComponent as News } from "../../assets/icons/news.svg";
import { LuNewspaper } from "react-icons/lu";
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

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 500; // Максимальный скролл, при котором opacity будет 0
      const newOpacity = 0 + scrollTop / maxScroll;
      setOpacity(newOpacity < 0 ? 0 : newOpacity); // Ограничиваем opacity, чтобы не было отрицательных значений
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="page-header">
        <div className="page-header-bg" style={{ opacity: opacity }}></div>
        <div className="page-header-nav">
          <div className="page-header-nav-left">
            <button>
              <Logo />
            </button>
          </div>
          <button className="page-header-nav-right">
            <CiSearch />
          </button>
        </div>
      </div>
      <div className={classNames("header", isScrolled)}>
        <div className="header-inner">
          <div className="header-left">
            <div className="header-left-icon">
              <a href="/" className="header-left-icon-btn">
                <Home
                  style={{
                    color:
                      (!isHomePage && !isTourPage) || opacity > 0
                        ? "#000"
                        : "hsl(0deg 0% 100%)",
                  }}
                />
              </a>

              <a href="/" className="header-left-icon-mb-btn">
                <MbHome />
              </a>
              <p>Главная</p>
            </div>

            <div className="header-left-icon">
              <a href="/about" className="header-left-icon-btn">
                <AiOutlineTeam
                  style={{
                    color:
                      (!isHomePage && !isTourPage) || opacity > 0
                        ? "#000"
                        : "hsl(0deg 0% 100%)",
                  }}
                />
              </a>

              <a href="/about" className="header-left-icon-mb-btn">
                <AiOutlineTeam />
              </a>
              <p>О нас</p>
            </div>

            <div className="header-left-icon">
              <a href="/calendar" className="header-left-icon-btn">
              <IoCalendarNumber
                  style={{
                    color:
                      (!isHomePage && !isTourPage) || opacity > 0
                        ? "#000"
                        : "hsl(0deg 0% 100%)",
                  }}
                />
              </a>

              <a href="/calendar" className="header-left-icon-mb-btn">
              <IoCalendarNumber />
              </a>
              <p>Календарь</p>
            </div>

            <div className="header-left-icon">
              <a href="/blogs" className="header-left-icon-btn">
                <LuNewspaper 
                  style={{
                    color:
                      (!isHomePage && !isTourPage) || opacity > 0
                        ? "#000"
                        : "hsl(0deg 0% 100%)",
                  }}
                />
              </a>

              <a href="/blogs" className="header-left-icon-mb-btn">
              <LuNewspaper />
              </a>
              <p>Главная</p>
            </div>

            <div className="header-left-icon">
              <button className="header-left-icon-btn">
                {store.isAuth ? (
                  <News
                    style={{
                      color:
                        (!isHomePage && !isTourPage) || opacity > 0
                          ? "#000"
                          : "hsl(0deg 0% 100%)",
                    }}
                  />
                ) : (
                  <FaUser
                    onClick={() => {
                      navigate(`/login`);
                    }}
                    style={{
                      color:
                        (!isHomePage && !isTourPage) || opacity > 0
                          ? "#000"
                          : "hsl(0deg 0% 100%)",
                    }}
                  />
                )}
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
