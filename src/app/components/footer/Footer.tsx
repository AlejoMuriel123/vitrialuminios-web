import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets/svg";

export default function Footer() {
  return (
    <div className="px-10 xl:px-40 py-16 border-t-[1px] border-t-gray-300 flex flex-col md:flex-row justify-between gap-8 items-center">
      <p className="text-gray-500 text-sm">
        © Vitrialuminos del Valle {new Date().getFullYear()}, All Rights Reserved.
      </p>
      <div className="flex flex-row gap-4">
        <a
          href="https://www.facebook.com/vitrialuminiosdelvalle"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
}
