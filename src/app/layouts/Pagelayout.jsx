import Footer from "../../common/footer/Footer";
import Header from "../../common/header/Header";
import Webdefaults from "../webdefaults";
import "./Pagelayout.css";
import { Outlet } from "react-router-dom";

export default function Pagelayout() {
  return (
    <div className="Pagelayout__main_wrapper">
      <Webdefaults />
      <Header />
      <main className="Pagelayout__body_container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
