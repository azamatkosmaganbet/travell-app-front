import { observer } from "mobx-react-lite";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Layout from "./Layout";
import Toast from "./components/Toast/Toast";
import TourPage from "./components/screens/TourPage/TourPage";
import Account from "./pages/Account/Account";
import GuidePage from "./pages/GuidePage/GuidePage";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Verification from "./pages/Verification/Verification";

function App() {
  return (
    <BrowserRouter>
      <Toast />
      <Routes>
        <Route element={<Layout />}>
          <Route element={<Main />} path="/" />
          <Route element={<Account />} path="/account/:id" />
          <Route element={<Register />} path="/register" />
          <Route element={<Login />} path="/login" />
          <Route element={<Verification />} path="/verification" />
          <Route element={<GuidePage />} path="/guide/:id" />
          <Route element={<TourPage />} path="/tour/:id" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
