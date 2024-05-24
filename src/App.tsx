import { observer } from "mobx-react-lite";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Toast from "./components/Toast/Toast";
import TourPage from "./components/screens/TourPage/TourPage";
import Account from "./pages/Account/Account";
import GuidePage from "./pages/GuidePage/GuidePage";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Register from "./pages/Register/Register";
import Verification from "./pages/Verification/Verification";
import City from "./pages/City/City";
import CreateCity from "./pages/CreateCity/CreateCity";
import GuideList from "./pages/GuideList/GuideList";
import BecomeLocalie from "./pages/BecomeLocalie/BecomeLocalie";
import Quiz from "./pages/Quiz/Quiz";
import CreateTrip from "./pages/CreateTrip/CreateTrip";
import MyTrips from "./pages/MyTrips/MyTrips";
import EditTour from "./pages/EditTour/EditTour";
import Calendar from "./pages/Calendar/Calendar";
import Blogs from "./pages/Blogs/Blogs";

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
          <Route element={<City />} path="/city/:id" />
          <Route element={<CreateCity />} path="/create/city" />
          <Route element={<GuideList />} path="/guide/list" />
          <Route element={<BecomeLocalie />} path="/info/become-localie" />
          <Route element={<Quiz />} path="/account/application" />
          <Route element={<CreateTrip />} path="/create/trip" />
          <Route element={<MyTrips />} path="/my-trips/:id" />
          <Route element={<EditTour />} path="/tour/edit/:id" />
          <Route element={<Calendar />} path="/calendar" />
          <Route element={<Blogs />} path="/blogs" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default observer(App);
