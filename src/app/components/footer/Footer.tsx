import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets/svg";

export default function Footer() {
  return (
    <div className="px-10 xl:px-40 py-16 border border-t-gray-300 flex flex-col md:flex-row justify-between gap-8 items-center">
      <p className="text-gray-500 text-sm">
        © Vitrialuminos del Valle {new Date().getFullYear()}, All Rights
        Reserved.
      </p>
      <div className="flex flex-row gap-4">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
