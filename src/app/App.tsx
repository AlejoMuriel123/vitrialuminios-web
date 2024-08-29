import { About, Home, Gallery } from "./sections";
import {
  OutOfServiceModal,
  Footer,
  Header,
  SmallHeader,
  CarouselHome,
} from "./components";
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import "./App.css";
import { useMobile } from "./hooks/useMobile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ScrollAnimation from "./components/scrollanimation/ScrollAnimation";

export default function App() {
  const { isMobile } = useMobile();

  return (
    <main>
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
      {isMobile ? <SmallHeader /> : <Header />}
      <ScrollAnimation>
        <CarouselHome />
        <Gallery />
        <About />
        <Footer />
      </ScrollAnimation>
    </main>
  );
}
