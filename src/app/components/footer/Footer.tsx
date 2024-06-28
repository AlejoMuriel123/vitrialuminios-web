import { FacebookIcon, InstagramIcon } from "../../assets/svg";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-10 xl:px-40">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold mb-4">Vitrialuminios del Valle</h2>
          <p className="text-gray-400">
            © {new Date().getFullYear()} Vitrialuminios del Valle, All Rights
            Reserved.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex flex-row gap-4">
            <a
              href="https://www.facebook.com/vitrialuminiosdelvalle"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/vitrialuminiosdelvalle?igsh=ZTRyN2xwZ3czbWY4"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <InstagramIcon />
            </a>
          </div>
          <form className="flex flex-col items-center md:items-start">
            <label htmlFor="email" className="text-sm text-gray-400 mb-2">
              Suscríbete a nuestro boletín:
            </label>
            <div className="flex flex-row">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Tu correo electrónico"
                className="p-2 rounded-l-lg border border-gray-300 focus:outline-none text-gray-800"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition-colors"
              >
                Suscribir
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};
