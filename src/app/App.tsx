/* eslint-disable @typescript-eslint/ban-ts-comment */
import { About, Gallery } from "./sections";
import {
  OutOfServiceModal,
  Footer,
  Header,
  SmallHeader,
  CarouselHome,
} from "./components";
import ScrollAnimation from "./components/scrollanimation/ScrollAnimation";
// @ts-expect-error
import { FloatingWhatsApp } from "@carlos8a/react-whatsapp-floating-button";
import { useMobile } from "./hooks/useMobile";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App() {
  const { isMobile } = useMobile();

  return (
    <main>
      <ScrollAnimation>
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
        <CarouselHome />
        <Gallery />
        <About />
        <Footer />
      </ScrollAnimation>
    </main>
  );
}
