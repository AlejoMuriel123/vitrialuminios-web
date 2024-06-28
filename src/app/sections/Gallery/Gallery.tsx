import { useState } from "react";
import { Modal } from "@mui/material";
import { Partners } from "../Partners";
import { jwtServicesConfig } from "../../jwtServices/jwtServicesConfig";
import { useMobile } from "../../hooks/useMobile";

export const Gallery = () => {
  const { isMobile } = useMobile();

  const totalWorks = 58; // Número total de elementos
  const initialPageSize = isMobile ? 4 : 8; // Número inicial de elementos por página
  const [visibleWorks, setVisibleWorks] = useState(initialPageSize);
  const [selectedImage, setSelectedImage] = useState("");

  const loadMore = () => {
    setVisibleWorks((prev) => Math.min(prev + initialPageSize, totalWorks));
  };

  return (
    <section id="gallery" className="bg-gray-100 pb-12 w-full">
      <Partners />

      <div className="flex flex-col items-center px-10 xl:px-40">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {Array.from({ length: visibleWorks }).map((_, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() =>
                setSelectedImage(
                  `${jwtServicesConfig.baseUrl}/public/vitrialuminios-${index}.jpg`
                )
              }
            >
              <img
                className="h-full w-full object-cover transition-transform duration-300 transform hover:scale-105"
                src={`${jwtServicesConfig.baseUrl}/public/vitrialuminios-${index}.jpg`}
                alt={`Trabajo ${index}`}
              />
            </div>
          ))}
        </div>
        {visibleWorks < totalWorks && (
          <button
            onClick={loadMore}
            className="mt-12 bg-blue-700 text-white px-6 py-2 rounded-full hover:bg-blue-800 transition duration-300"
          >
            Ver más
          </button>
        )}
      </div>
      <Modal
        open={!!selectedImage}
        onClose={() => setSelectedImage("")}
        className="flex justify-center items-center bg-black bg-opacity-75"
      >
        <div className="relative w-3/4 h-3/4">
          <img
            src={selectedImage}
            alt="Imagen ampliada"
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setSelectedImage("")}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
          >
            ✕
          </button>
        </div>
      </Modal>
    </section>
  );
};
