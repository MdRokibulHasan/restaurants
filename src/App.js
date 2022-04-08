import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Context/AuthProvider";
import Navbar from "./Components/Share/Navbar/Navbar";
import About from "./Pages/About/About";
import Footer from "./Pages/Foooter/Footer";
import Menu from "./Pages/Menu/Menu";
import ShowMenu from "./Components/ShowMenu/ShowMenu";
import MenuDetails from "./Components/MenuDetails/MenuDetails";
import Dashborad from "./Pages/Dashborad/Dashborad";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import UserOrder from "./Components/UserOrder/UserOrder";
import Contact from "./Pages/Contact/Contact";
function App() {
  return (
    <div>
      <AuthProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/showmenu" element={<ShowMenu />} />
          <Route
            path="/food/:id"
            element={
              <PrivateRoute>
                <MenuDetails />
              </PrivateRoute>
            }
          />
          <Route path="dashboard" element={<Dashborad />}></Route>
          <Route path="userorder" element={<UserOrder />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
