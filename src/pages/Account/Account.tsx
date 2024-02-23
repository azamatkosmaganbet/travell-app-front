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
const Account = () => {
  const { store } = useContext(Context);
  const fileInputRef = useRef(null);
  const { id } = useParams<{ id: string }>();
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setAvatarFile(file || null);
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth();
    }
  }, []);

  const handleUpdateAvatar = () => {
    // Замените на ваш способ получения ID пользователя
    console.log(avatarFile)
    if (avatarFile && id) {
      store.changeAvatar(id, avatarFile);
    }
  };
  return (
    <div className="main">
      <div className="profile-container">
        <div className="profile-container-inner">
          <div className="profile">
            <div className="profile-top">
              <form className="profile-form">
                <label className="profile-form__label">
                  <div className="profile-form__inner">
                    <div className="profile-img">
                      <input
                        onChange={handleFileChange}
                        type="file"
                        accept="*image"
                        multiple
                      />
                      <button onClick={handleUpdateAvatar}>Сохранить</button>
                      <img src={`http://localhost:5000/${store.user.avatar}`} />
                      <div className="edit">
                        <svg
                          color="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
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
                  </div>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
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
