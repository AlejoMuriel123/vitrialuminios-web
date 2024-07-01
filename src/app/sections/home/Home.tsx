import { useMobile } from "../../hooks/useMobile";
import { jwtServicesConfig } from "../../jwtServices/jwtServicesConfig";
import { Carousel } from "flowbite-react";

export const Home = () => {
  const { isMobile } = useMobile();

  const slides = [
    "Vitrialuminios, el lugar para tus proyectos.",
    "Innovación en cada paso, construyendo un futuro brillante.",
    "Calidad y confianza en cada proyecto.",
    "Transformando espacios con excelencia.",
  ];

  return (
    <div id="home" className="w-full h-[80vh] relative">
      <Carousel
        indicators={false}
        leftControl={isMobile}
        rightControl={isMobile}
        className="h-full w-full absolute inset-0"
      >
        {slides.map((text, index) => (
          <div key={index} className="relative w-full h-full">
            <img
              className="w-full h-full object-cover brightness-50"
              src={`${jwtServicesConfig.baseUrl}/public/vitrialuminios-${
                index * (Math.floor(Math.random() * (50 / 4)) + 1)
              }.jpg`}
              alt={`Image ${index * 5}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center w-2/3 mx-auto">
              <div className="text-center text-white space-y-8">
                <p className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-tight">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <a
        href="#gallery"
        className="absolute -bottom-8 text-blue-700 border-2 border-blue-700 bg-white left-0 right-0 mx-auto w-fit inline-block px-10 py-4 rounded-full text-xl font-semibold hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out transform hover:translate-y-1 hover:shadow-lg"
      >
        <span>&#9660;</span> Ver Fotos de trabajos <span>&#9660;</span>
      </a>
    </div>
  );
};
