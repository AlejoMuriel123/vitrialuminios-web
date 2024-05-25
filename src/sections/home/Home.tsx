export default function Home() {
  return (
    <div id="home">
      <div className="home-image">
        <div className="flex justify-center flex-col items-center px-10">
          <p className="pt-72 text-3xl sm:text-4xl xl:text-7xl text-center text-white">
            Estamos construyendo tu futuro
          </p>
          <p className="pt-8 text-base xl:text-xl text-center text-white">
            Da un paso hacia el futuro de la construcción con Vitrialuminios
          </p>
          <a href="#products" className="bg-[#63a5d4] mt-8 px-10 py-4 rounded-full text-white hover:bg-gray-700  transition duration-300 ease-in-out">
            Ver productos
          </a>
        </div>
      </div>
    </div>
  );
}
