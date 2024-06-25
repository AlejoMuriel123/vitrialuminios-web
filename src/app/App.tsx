import { Hidden } from "@mui/material";
import About from "./sections/about/About";
import Carosuel from "./sections/carousel/Carosuel";
// import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";
import { OutOfServiceModal, Footer, Header, SmallHeader } from "./components";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import "./App.css";

export default function App() {
  return (
    <>
      <OutOfServiceModal />
      <FloatingWhatsApp
        phoneNumber="573188372089"
        accountName="Vitrialuminios"
        avatar="src/app/assets/img/logo/logo-white.png"
        initialMessageByServer="Hola, en qué podemos ayudarte?"
        statusMessage="Disponible"
        placeholder="Escribe tu mensaje..."
        allowEsc={true}
      />
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <Home />
      <About />
      <Products />
      <Carosuel />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
