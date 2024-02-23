import { observer } from "mobx-react-lite";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Verification from "./pages/Verification/Verification";
import Toast from "./components/Toast/Toast";
import Header from "./components/Header/Header";
import Account from "./pages/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route
          element={
            <>
              <Header />
              <Outlet />
            </>
          }
        >
          <Route element={<Main />} path="/" />
          <Route element={<Account />} path="/account/:id" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Verification />} path="/verification" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
