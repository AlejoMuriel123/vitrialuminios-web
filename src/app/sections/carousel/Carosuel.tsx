function Carousel() {
  const images = [
    "https://seeklogo.com/images/A/argos-logo-BBBBA033C6-seeklogo.com.png",
    "https://www.vidriosdelasabana.com/wp-content/uploads/2023/06/Logo-Vidrios-de-la-Sabana-Full-Vertical-.png",
    "https://vidriosv2.com/wp-content/uploads/2020/07/vidrios-v2-colombia--1024x652.png",
    "https://alucol.com.co/img/logo.png",
  ];

  return (
    <div>
      <p className="text-2xl xl:text-4xl text-center pt-28">Empresas aliadas</p>
      <div className="body">
        <div className="Marquee">
          <div className="Marquee-content">
            {images.map((image, index) => (
              <div key={index} className="Marquee-tag">
                <img className="w-40" src={image} alt={`Slide ${index}`} />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={index} className="Marquee-tag">
                <img className="w-40" src={image} alt={`Slide ${index}`} />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={index} className="Marquee-tag">
                <img className="w-40" src={image} alt={`Slide ${index}`} />
              </div>
            ))}
            {images.map((image, index) => (
              <div key={index} className="Marquee-tag">
                <img className="w-40" src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
