export const Partners = () => {
  const images = [
    "https://seeklogo.com/images/A/argos-logo-BBBBA033C6-seeklogo.com.png",
    "https://www.vidriosdelasabana.com/wp-content/uploads/2023/06/Logo-Vidrios-de-la-Sabana-Full-Vertical-.png",
    "https://vidriosv2.com/wp-content/uploads/2020/07/vidrios-v2-colombia--1024x652.png",
    "https://alucol.com.co/img/logo.png",
  ];

  return (
    <div className="flex items-center justify-center py-12 px-0 relative overflow-hidden">
      <div className="Marquee">
        <div className="Marquee-content">
          {images.map((image, index) => (
            <picture key={index} className="Marquee-tag">
              <img className="min-w-40" src={image} alt={`Slide ${index}`} />
            </picture>
          ))}
          {images.map((image, index) => (
            <picture key={index} className="Marquee-tag">
              <img className="min-w-40" src={image} alt={`Slide ${index}`} />
            </picture>
          ))}
          {images.map((image, index) => (
            <picture key={index} className="Marquee-tag">
              <img className="min-w-40" src={image} alt={`Slide ${index}`} />
            </picture>
          ))}
          {images.map((image, index) => (
            <picture key={index} className="Marquee-tag">
              <img className="min-w-40" src={image} alt={`Slide ${index}`} />
            </picture>
          ))}
        </div>
      </div>
    </div>
  );
};
