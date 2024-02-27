import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Button, Placeholder } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../..";
import Logo from "../../assets/test/logo.png";
import "./Header.scss";
import classNames from "classnames";
const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<number | null>(0);

  const [isScrolled, setIsScrolled] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scroll = 50;
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

  if (isLoading) {
    return <Placeholder />;
  }

  return (
    <div className={classNames("header", isScrolled)}>
      <div className="header-inner container">
        <Link to={"/"} className="logo">
          <img src={Logo} alt="Логотип" />
        </Link>
        <ul className="header-list">
          <li
            className={`header-list-li ${activeLink === 0 ? "active" : ""}`}
            onClick={() => handleLinkClick(0)}
          >
            <a className={`header-list-li-a`}>
              <svg
                color="red"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                className="sc-dkrGBB dSMOsN  css-1cyk0gu"
                height="24"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"
                  className="sc-eDvShL YFXNM"
                ></path>
                <path
                  fill="currentColor"
                  d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
                  className="sc-eDvShL YFXNM"
                ></path>
              </svg>
            </a>
          </li>
          <li
            className={`header-list-li ${activeLink === 1 ? "active" : ""}`}
            onClick={() => handleLinkClick(1)}
          >
            <a className="header-list-li-a">
              <svg
                color="red"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                className="sc-dkrGBB dSMOsN  css-1cyk0gu"
                height="24"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"
                  className="sc-eDvShL YFXNM"
                ></path>
                <path
                  fill="currentColor"
                  d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
                  className="sc-eDvShL YFXNM"
                ></path>
              </svg>
            </a>
          </li>
          <li
            className={`header-list-li ${activeLink === 2 ? "active" : ""}`}
            onClick={() => handleLinkClick(2)}
          >
            <a className="header-list-li-a">
              <svg
                color="red"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                className="sc-dkrGBB dSMOsN  css-1cyk0gu"
                height="24"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"
                  className="sc-eDvShL YFXNM"
                ></path>
                <path
                  fill="currentColor"
                  d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
                  className="sc-eDvShL YFXNM"
                ></path>
              </svg>
            </a>
          </li>
          <li
            className={`header-list-li ${activeLink === 3 ? "active" : ""}`}
            onClick={() => handleLinkClick(3)}
          >
            <a className="header-list-li-a">
              <svg
                color="red"
                aria-hidden="true"
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                className="sc-dkrGBB dSMOsN  css-1cyk0gu"
                height="24"
                width="24"
              >
                <path
                  fill="currentColor"
                  d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"
                  className="sc-eDvShL YFXNM"
                ></path>
                <path
                  fill="currentColor"
                  d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
                  className="sc-eDvShL YFXNM"
                ></path>
              </svg>
            </a>
          </li>
        </ul>

        <div className="right">
          {!store.isAuth ? (
            <Button
              onClick={() => {
                navigate("/login");
              }}
              className="btn-sm bg-transparent text-blue fw-bold me-4"
            >
              Login
            </Button>
          ) : (
            <Link to={`/account/${store.user.id}`} className="header-avatar">
              <img alt="" src={`http://localhost:5000/${store.user.avatar}`} />
            </Link>
          )}

          {!store.isAuth ? (
            <Button
              onClick={() => {
                navigate("/register");
              }}
              className="bg-orange border-white btn-sm"
            >
              Sign Up
            </Button>
          ) : (
            <Button
              onClick={() => {
                store.logout();
              }}
              className="bg-secondary border-white btn-sm"
            >
              Log Out
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(Header);
