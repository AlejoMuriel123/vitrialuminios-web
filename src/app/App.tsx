import { About, Home, Gallery } from "./sections";
import { OutOfServiceModal, Footer, Header, SmallHeader } from "./components";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useMobile } from "./hooks/useMobile";
import "./App.css";

export default function App() {
  const { isMobile } = useMobile();

  return (
    <main>
      <OutOfServiceModal />
      <FloatingWhatsApp
        phoneNumber="573188372089"
        accountName="Vitrialuminios"
        avatar="src/app/assets/img/logo/logo-white.png"
        chatMessage="Hola, en qué podemos ayudarte?"
        statusMessage="Disponible"
        placeholder="Escribe tu mensaje..."
        allowEsc={true}
      />
      {isMobile ? <SmallHeader /> : <Header />}

      <Home />
      <Gallery />
      <About />
      <Footer />
    </main>
  );
}
