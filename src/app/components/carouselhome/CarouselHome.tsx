import Slider, { Settings } from "react-slick";
import { jwtServicesConfig } from "../../jwtServices/jwtServicesConfig";

const images = [
  {
    id: 1,
    img: `${jwtServicesConfig.baseUrl}/public/vitrialuminios-58.jpg`,
    text: "Vitrialuminios, el lugar para tus proyectos.",
  },
  {
    id: 2,
    img: `${jwtServicesConfig.baseUrl}/public/vitrialuminios-59.jpg`,
    text: "Innovación en cada paso, construyendo un futuro brillante.",
  },
  {
    id: 2,
    img: `${jwtServicesConfig.baseUrl}/public/vitrialuminios-60.jpg`,
    text: "Calidad y confianza en cada proyecto.",
  },
  {
    id: 2,
    img: `${jwtServicesConfig.baseUrl}/public/vitrialuminios-61.jpg`,
    text: "Transformando espacios con excelencia.",
  },
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
    draggable: false,
    autoplaySpeed: 5000,
    pauseOnHover: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="relative w-screen h-screen">
            <img
              className="w-full h-full object-cover brightness-[.3]"
              src={item.img}
              alt={`Image ${index * 5}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center w-2/3 mx-auto">
              <div className="text-center text-white space-y-8">
                <p className="text-4xl sm:text-5xl xl:text-7xl font-bold leading-relaxed py-2 gradient-span-copy">
                  {item.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
