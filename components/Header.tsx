// components/Header.js

import { resumeData } from "@/app/env";
import { Basic } from "@/types/Resume";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Header: React.FC<HeaderProps> = ({ basics, pfp }) => {

  const { name, profession, phone, email, url } = basics ?? {};

  return (
    <header>
      <div className="flex justify-between">
        <div>
          {Boolean(pfp) ? (
            <Image
              src={pfp!}
              alt="Profile Photo"
              className="w-24 h-24 rounded-full overflow-hidden"
            />
          ) : (
            <p>No Profile Photo</p>
          )}
        </div>
        <div className="flex flex-col items-end ">
          {/* <h1 className="font-smileySansOblique text-4xl">{name}</h1> */}
          <h1 className="font-sourceHanSerifSC text-4xl font-bold">{name}</h1>
          <div className="mt-1"></div>
          <div className="font-sourceHanSerifSC text-1xl font-bold">{profession}</div>
          <div className="mt-2"></div>
          {/* contack ways */}
          <div className="flex flex-row items-center text-xs font-normal">
            <div className="h-6 flex items-center">
              <PhoneIcon className="h-3 w-3" />
              <a href={"tel:" + phone} className="ml-1 text-xs">
                {phone}
              </a>
            </div>
            <div className="h-6 flex items-center ml-2">
              <EnvelopeIcon className="h-3 w-3 items-center" />
              <a href={"mailto:" + email} className="ml-">
                {email}
              </a>
            </div>
            <div className="h-6 flex items-center ml-2">
              <LinkIcon className="h-3 w-3" />
              <a href={url} className="ml-1">
                {url}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

interface HeaderProps {
  basics: Basic | undefined;
  pfp: StaticImageData | undefined;
}

export default Header;
