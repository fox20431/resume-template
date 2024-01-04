// components/Header.js

import { resumeData } from '@/app/env';
import { Basic } from '@/types/Resume';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

const Header: React.FC<HeaderProps> = ({ basics, pfp }) => {

  // if (basics != undefined) {
  //   const { name, position ,email, phone } = phone;
  // }
  const { name, position, email, phone } = basics ?? {};

  // const githubProfile = profiles.find(profile => profile.network === 'GitHub');

  return (
    <header>
      <div className="flex justify-between">
        <div className='rounded-full overflow-hidden'>
          {Boolean(pfp) ? (
            <Image src={pfp!} alt="Profile Photo" width={100} />
          ) : (
            <p>No Profile Photo</p>
          )}
        </div>
        <div>
          <h1 className='font-smileySansOblique text-4xl' >{name}</h1>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          {/* {githubProfile && (
            <p>
              GitHub: <a href={githubProfile.url}>{githubProfile.username}</a>
            </p>
          )} */}
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
