import { Hidden } from "@mui/material";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import About from "./sections/about/About";
import Contact from "./sections/contact/Contact";
import Home from "./sections/home/Home";
import Products from "./sections/products/Products";
import SmallHeader from "./components/smallheader/SmallHeader";
import "./App.css";

function App() {
  return (
    <div>
      <Hidden smDown>
        <Header />
      </Hidden>
      <Hidden smUp>
        <SmallHeader />
      </Hidden>
      <Home />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
