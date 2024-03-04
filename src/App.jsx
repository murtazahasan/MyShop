import { useEffect } from "react";
import "./App.css";
import {
  Header,
  Home,
  Men,
  Women,
  About,
  Contact,
  Bag,
  Footer,
} from "./components/index";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
