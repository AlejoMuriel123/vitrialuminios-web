import { HomeIcon, MailIcon, PhoneIcon } from "../../assets/svg";

export default function Contact() {
  return (
    <div id="contact" className="px-10 xl:px-40 py-20">
      <div className="grid md:grid-cols-3 gap-10 items-start">
        <div className="flex flex-col items-center">
          <HomeIcon />
          <p className="pt-4 text-xl font-medium">Dirección</p>
          <p className="pt-4 text-center w-full xl:w-1/2 text-gray-500">
            220 Petersham town, Wardell street, Australia PA 6550.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <PhoneIcon />
          <p className="pt-4 text-xl font-medium">Teléfono</p>
          <p className="pt-4 text-center text-gray-500">
           +57 312 491 5621
          </p>
          <p className="text-center text-gray-500">+57 642 021 3329</p>
        </div>
        <div className="flex flex-col items-center">
          <MailIcon />
          <p className="pt-4 text-xl font-medium">Correo</p>
          <p className="pt-4 text-center text-gray-500">vitrialuminiosdelvalle@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
