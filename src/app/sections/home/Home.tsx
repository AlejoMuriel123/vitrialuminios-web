import { Carousel } from "flowbite-react";

export default function Home() {
  return (
    <div id="home" className="w-full h-screen relative">
      <Carousel indicators={false} >
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="flex flex-col items-center text-white">
          <p className="text-3xl sm:text-4xl xl:text-7xl text-center px-0 sm:px-20">
            Da un paso en el futuro de la construcción con Vitrialuminios
          </p>
          <a
            href="#products"
            className="bg-[#63a5d4] mt-8 px-10 py-4 rounded-full hover:bg-gray-700  transition duration-300 ease-in-out"
          >
            Ver productos
          </a>
        </div>
      </div>
    </div>
  );
}
