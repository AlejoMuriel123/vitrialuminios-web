import aboutImage from "../../assets/img/home/testAb.jpg";

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row gap-8 relative  md:h-[90vh] items-center justify-center md:overflow-hidden"
    >
      <div className="flex flex-col p-8 justify-center gap-8 w-full md:w-1/2 px-6 md:px-20 z-10 md:static absolute top-0 left-0 right-0 bottom-0">
        <p className="text-4xl md:text-5xl font-semibold text-center md:text-left text-blue-800">
          Acerca de Nosotros
        </p>
        <p className="text-lg md:text-2xl leading-relaxed text-center md:text-left text-gray-800">
          Somos una empresa joven que cuenta con el apoyo de los más
          experimentados maestros con una larga trayectoria en el ámbito de la
          construcción.
        </p>
        <p className="text-lg md:text-2xl leading-relaxed text-center md:text-left text-gray-800">
          Con un talento humano capacitado para brindarle a nuestros clientes
          excelentes productos acompañados de una buena atención, asesoría y
          servicio basados en la necesidad de cada uno de ellos.
        </p>
      </div>

      <div className="md:w-1/2 h-full flex flex-col gap-4 relative absolute right-20 md:right-0 -top-12 z-0 rotate-6 opacity-50">
        <div className="w-full h-1/4 md:h-1/2 flex gap-4">
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={aboutImage}
            alt="Acerca de Nosotros"
            loading="lazy"
          />
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={aboutImage}
            alt="Acerca de Nosotros"
            loading="lazy"
          />
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={aboutImage}
            alt="Acerca de Nosotros"
            loading="lazy"
          />
        </div>
        <div className="w-full h-1/3 md:h-2/3 flex gap-4">
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={aboutImage}
            alt="Acerca de Nosotros"
            loading="lazy"
          />
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={aboutImage}
            alt="Acerca de Nosotros"
            loading="lazy"
          />
          <img
            className="w-full h-full rounded-3xl object-cover"
            src={aboutImage}
            alt="Acerca de Nosotros"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
