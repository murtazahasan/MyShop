import { useEffect } from "react";
import "./App.css";
import {
  Header,
  Home,
  Men,
  Women,
  About,
  Contact,
  Signup,
  Bag,
  CartBox,
  CartSection,
  ProductDetail,
  Footer,
  Login,
} from "./components/index";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDispatch } from "react-redux";
import { loadUserFromToken } from "./reducers/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
    dispatch(loadUserFromToken());
  }, [dispatch]);

  return (
    <>
      <Header />
      <CartBox />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
