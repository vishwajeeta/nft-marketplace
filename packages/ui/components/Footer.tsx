import { TextNormalSans } from "./TextNormalSans";
import GithubIcon from "./icons/GithubIcon";
import InstagramIcon from "./icons/InstagramIcon";
import MediumIcon from "./icons/MediumIcon";
import StackoverflowIcon from "./icons/StackoverflowIcon";
import TwitterIcon from "./icons/TwitterIcon";
import Link from "next/link";

import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="flex flex-col py-10 max-md:py-8 xxs:px-2 xs:px-5 sm:px-10 lg:px-[5vw] xl:px-[15vw] 2xl:px-[15vw] gap-y-10 md:gap-y-14 lg:gap-y-20 w-full bg-dark-gray">
      <div className="flex flex-col gap-5">
        <Logo />

        <TextNormalSans className="text-[#CCC] text-base">
          This project is based and inspired by this Figma template:{` `}
          <Link
            href="https://www.figma.com/community/file/1173962104946517060"
            target="_blank"
            className="italic text-purple"
          >
            NFT Marketplace Template
          </Link>{" "}
          from{" "}
          <Link
            href="https://www.figma.com/@anima"
            target="_blank"
            className="italic text-purple"
          >
            Anima
          </Link>
        </TextNormalSans>
      </div>
    </footer>
  );
}
