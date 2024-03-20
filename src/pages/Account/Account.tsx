import React, {
  ChangeEvent,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./Account.scss";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import { Title } from "../../components/UI/Title/Title";
import InfoCard from "../../components/InfoCard/InfoCard";
import { FaUserCircle } from "react-icons/fa";
import { Spinner } from "react-bootstrap";
import { MdOutlineVerified } from "react-icons/md";
const Account = () => {
  const { store } = useContext(Context);
  const fileInputRef = useRef(null);
  const { id } = useParams<{ id: string }>();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  // const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files && e.target.files[0];
  //   setAvatarFile(file || null);
  // };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setAvatarFile(file || null);

    // Вызываем store.changeAvatar сразу после изменения файла
    if (file && id) {
      store.changeAvatar(id, file);
    }
  };

  // if (store.isLoading) {
  //   return (
  //     <div className="text-center">
  //       <Spinner />
  //     </div>
  //   );
  // }

  // if (!store.isAuth) {
  //   return (
  //     <div>
  //       <div>
  //         <h1>Привет 👋</h1>
  //       </div>
  //     </div>
  //   );
  // }

  // if (store.isLoading) {
  //   return (
  //     <div>
  //       <p className="placeholder-glow">
  //         <span className="placeholder col-12"></span>
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <section className="main section">
      <div className="container">
        <div className="profile">
          <div className="profile-avatar">
            <form className="profile-avatar-form">
              <label className="profile-avatar-form__label">
                <input
                  onChange={handleFileChange}
                  type="file"
                  accept="*image"
                  multiple
                />
                <div className="profile-img">
                  {store.isLoading ? (
                    <svg
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height="224"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Placeholder</title>
                      <rect width="100%" height="100%" fill="#868e96"></rect>
                    </svg>
                  ) : store.user.avatar ? (
                    <img
                      alt=""
                      src={`http://localhost:5000/${store.user.avatar}`}
                    />
                  ) : (
                    <span className="default-user-avatar">
                      <FaUserCircle />
                    </span>
                  )}

                  <div className="profile-edit">
                    <svg
                      color="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 15 15"
                      className="sc-dkrGBB jhVyiZ  css-17jtmv1"
                      width="24"
                      height="24"
                    >
                      <path
                        fill="currentColor"
                        d="M8.05 4.75L10.25 6.95L6.35 10.85C6.25 10.95 6.15 11 6 11H4.5C4.2 11 4 10.8 4 10.5V9C4 8.85 4.05 8.75 4.15 8.65L8.05 4.75ZM11.85 4.65C12.05 4.85 12.05 5.15 11.85 5.35L10.95 6.25L8.75 4.05L9.65 3.15C9.85 2.95 10.15 2.95 10.35 3.15L11.85 4.65Z"
                        className="sc-eDvShL YFXNM"
                      ></path>
                    </svg>
                  </div>
                </div>
              </label>
            </form>

            <div className="profile-title">
              {store.isLoading ? (
                <p className="placeholder-glow">
                  <span className="placeholder col-12"></span>
                </p>
              ) : (
                <Title variant="h3">
                  {store.user.name} {store.user.surname}{" "}
                  {store.user.isActivated && <MdOutlineVerified fill="green" />}
                </Title>
              )}
            </div>
          </div>

          <div className="profile-info">
            <InfoCard tag="Personal Information" type="solo" />

            <InfoCard tag="Become a GO" type="solo" title="My GO Profiles" />

            <InfoCard tag="Become a GO" type="solo" title="Settings" />

            <div className="profile-cards">
              <InfoCard type="combined" title="Information" tag="Become a GO" />
              <InfoCard type="combined" tag="Contact Support" />
              <InfoCard type="combined" tag="About us" />
              <InfoCard type="combined" tag="Review" />
              <InfoCard
                type="combined"
                tag="Delete my personal data"
                color="red"
              />
            </div>

            <InfoCard color="red" tag="Log out" type="solo" title="Log out" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default observer(Account);

// <div className="profile-img">
//   <img src={`http://localhost:5000/${store.user.avatar}`} />
//   <div className="edit-icon">
//     <svg
//       color="currentColor"
//       xmlns="http://www.w3.org/2000/svg"
//       viewBox="0 0 15 15"
//       className="sc-dkrGBB jhVyiZ  css-17jtmv1"
//       width="24"
//       height="24"
//     >
//       <path
//         fill="currentColor"
//         d="M8.05 4.75L10.25 6.95L6.35 10.85C6.25 10.95 6.15 11 6 11H4.5C4.2 11 4 10.8 4 10.5V9C4 8.85 4.05 8.75 4.15 8.65L8.05 4.75ZM11.85 4.65C12.05 4.85 12.05 5.15 11.85 5.35L10.95 6.25L8.75 4.05L9.65 3.15C9.85 2.95 10.15 2.95 10.35 3.15L11.85 4.65Z"
//         className="sc-eDvShL YFXNM"
//       ></path>
//     </svg>
//   </div>
// </div>

// <div className="profile-title">
//   <h3>
//     {store.user.name} {store.user.surname}
//   </h3>
// </div>

// <div className="profile-container">
//   <div className="profile-container-inner">
//     <div className="profile">
//       <div className="profile-top">
//         <form className="profile-form">
//           <label className="profile-form__label">
//             <div className="profile-form__inner">
//               <div className="profile-img">
//                 <input
//                   onChange={handleFileChange}
//                   type="file"
//                   accept="*image"
//                   multiple
//                 />
//                 <img src={`http://localhost:5000/${store.user.avatar}`} />
//                 <div className="edit">
//                   <svg
//                     color="currentColor"
//                     xmlns="http://www.w3.org/2000/svg"
//                     xmlnsXlink="http://www.w3.org/1999/xlink"
//                     viewBox="0 0 15 15"
//                     className="sc-dkrGBB jhVyiZ  css-17jtmv1"
//                     width="24"
//                     height="24"
//                   >
//                     <path
//                       fill="currentColor"
//                       d="M8.05 4.75L10.25 6.95L6.35 10.85C6.25 10.95 6.15 11 6 11H4.5C4.2 11 4 10.8 4 10.5V9C4 8.85 4.05 8.75 4.15 8.65L8.05 4.75ZM11.85 4.65C12.05 4.85 12.05 5.15 11.85 5.35L10.95 6.25L8.75 4.05L9.65 3.15C9.85 2.95 10.15 2.95 10.35 3.15L11.85 4.65Z"
//                       className="sc-eDvShL YFXNM"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>

//               <div className="text-center">
//                 <Title variant="h4">
//                   {store.user.name} {store.user.surname}
//                 </Title>
//               </div>
//             </div>
//           </label>
//         </form>
//       </div>

//       <div>
//         <button></button>
//       </div>
//     </div>
//   </div>
// </div>;
