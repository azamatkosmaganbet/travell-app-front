import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../..";
import LoginPhoto from "../../assets/test/login.png";
import "./Login.scss";
const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { store } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      store.checkAuth().then(() => {
        navigate("/");
      });
    }
  }, [navigate, store]);

  // if (store.isLoading) {
  //   return (
  //     <div className="text-center">
  //       <Spinner />
  //     </div>
  //   );
  // }

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    store.login(email, password, navigate);
  };

  return (
    <div className="login">
      <div className="login-inner">
        <div className="login-content">
          <div className="login-top">
            <p>Вход или регистрация</p>
          </div>
          <div className="login-bottom">
            <p>Добро пожаловать в Локали</p>
            <form className="login-form" onSubmit={submitHandler}>
              <Form.Group
                className="mb-3 mt-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="border-0"
                  size="lg"
                  type="email"
                  value={email}
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="border-0"
                  size="lg"
                  type="password"
                  value={password}
                  placeholder="Password"
                />
              </Form.Group>
              <Button type="submit" className="btn btn-lg bg-orange border-0 ">
                Войти
              </Button>
            </form>
            <div className="divider">
              <span>или</span>
            </div>
            <div className="variants">
              <button
                onClick={() => {
                  navigate("/register");
                }}
              >
                <p>Зарегистрироваться</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Login);

{
  /* <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        type="text"
        placeholder="Password"
      />
      <button
        onClick={() => {
          store.login(email, password);
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          store.registration(email, password);
        }}
      >
        Register
      </button> */
}

// <div className="container-xxl">
//   <div className="login">
//     <div className="login-avatar">
//       <img src={LoginPhoto} alt="" />
//     </div>

//     <div className="login-main">
//       <h1 className="title">Hi, welcome to GO Trip!</h1>
//       <form className="login-form" onSubmit={submitHandler}>
//         <div className="login-form-block">
//           <Form.Group
//             className="mb-3"
//             controlId="exampleForm.ControlInput1"
//           >
//             <Form.Label>Email: </Form.Label>
//             <Form.Control
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//               type="email"
//               value={email}
//               placeholder="name@example.com"
//             />
//           </Form.Group>
//           <Form.Group
//             className="mb-3"
//             controlId="exampleForm.ControlInput1"
//           >
//             <Form.Label>Password: </Form.Label>
//             <Form.Control
//               onChange={(e) => {
//                 setPassword(e.target.value);
//               }}
//               type="password"
//               value={password}
//               placeholder="Password"
//             />
//           </Form.Group>
//           <p className="text-end text-warning ">Forgot Password ?</p>
//           <Button type="submit">Login</Button>
//         </div>

//         <div className="login-line">
//           <span>or</span>
//         </div>
//         <div className="d-flex flex-column">
//           <Button className="my-2 btn-secondary">
//             <i className="bi bi-google"></i>
//             <span className="mx-2">Continue with Google</span>
//           </Button>
//           <Button className="my-2 btn-secondary">
//             <i className="bi bi-facebook"></i>
//             <span className="mx-2">Continue with Facebook</span>
//           </Button>
//         </div>
//       </form>

//       <div className="text-center my-2">
//         <p>
//           Don’t have account?{" "}
//           <span className="text-warning">Sign Up</span>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>;
