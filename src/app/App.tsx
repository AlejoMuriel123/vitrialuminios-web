import { Hidden } from "@mui/material";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./sections/about/About";
import Carosuel from "./sections/carousel/Carosuel";
import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";
import SmallHeader from "./components/smallheader/SmallHeader";
import "./App.css";

function App() {
  return (
    <div>
       <div className="floating-text">Out of service</div>
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
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
