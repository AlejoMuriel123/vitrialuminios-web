import { jwtServicesConfig } from "../../jwtServices/jwtServicesConfig";
import Slider, { Settings } from "react-slick";

const slides = [
  "Vitrialuminios, el lugar para tus proyectos.",
  "Innovación en cada paso, construyendo un futuro brillante.",
  "Calidad y confianza en cada proyecto.",
  "Transformando espacios con excelencia.",
];

export const CarouselHome = () => {
  const settings: Settings = {
    infinite: true,
    lazyLoad: "ondemand",
    speed: 3000,
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {slides.map((text, index) => (
          <div key={index} className="relative w-screen h-screen">
            <img
              className="w-full h-full object-cover brightness-[.4]"
              src={`${jwtServicesConfig.baseUrl}/public/vitrialuminios-${
                index * (Math.floor(Math.random() * (50 / 4)) + 1)
              }.jpg`}
              alt={`Image ${index * 5}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center w-2/3 mx-auto">
              <div className="text-center text-white space-y-8">
                <p className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-relaxed py-2 gradient-span-copy">
                  {text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
