import { jwtServicesConfig } from "../../jwtServices/jwtServicesConfig";

export const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row gap-8 relative items-center justify-center md:overflow-hidden bg-gray-50 p-10 md:p-20"
    >
      <div className="flex flex-col justify-center gap-8 w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl font-bold text-blue-700">Acerca de Nosotros</h2>
        <p className="text-xl font-medium text-gray-800 leading-relaxed">
          Somos una empresa joven que cuenta con el apoyo de los más
          experimentados maestros con una larga trayectoria en el ámbito de la
          construcción.
        </p>
        <p className="text-xl font-medium text-gray-800 leading-relaxed">
          Con un talento humano capacitado para brindarle a nuestros clientes
          excelentes productos acompañados de una buena atención, asesoría y
          servicio basados en la necesidad de cada uno de ellos.
        </p>
      </div>

      <div className="md:w-1/2 w-full relative overflow-hidden">
        <img
          className="w-full h-full object-cover rounded-lg shadow-lg"
          src={`${jwtServicesConfig.baseUrl}/public/vitrialuminios-about.jpg`}
          alt="Acerca de Nosotros"
          loading="lazy"
        />
      </div>
    </section>
  );
};
