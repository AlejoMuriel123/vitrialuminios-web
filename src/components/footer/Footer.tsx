import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets/svg";

export default function Footer() {
  return (
    <div className="px-10 xl:px-40 py-8 border border-t-gray-300 flex justify-between gap-8 items-center">
      <p className="text-gray-500 text-sm">
        © Vitrialuminos del Valle 2024, All Rights Reserved.
      </p>
      <div className="flex flex-row gap-4">
        <FacebookIcon />
        <TwitterIcon />
        <InstagramIcon />
      </div>
    </div>
  );
}
