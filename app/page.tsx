'use client'
import Image, { StaticImageData } from 'next/image'

import Header from '@/components/Header'
import { useEffect, useState } from 'react';
import * as ResumeData from '@/types/Resume';

export default function Home() {
  
  const resumePromise = import(process.env.NEXT_PUBLIC_RESUME_DATA_LOCATION!)
  const profilePhotoPromise = import(process.env.NEXT_PUBLIC_PROFILE_PHOTO_LOCATION!)

  let [resume, setResume] = useState<ResumeData.Resume>();
  let [profilePhoto, setProfilePhoto] = useState<StaticImageData>();

  useEffect(() => {
    resumePromise.then((resumeData) => {
      setResume(resumeData)
    });
    profilePhotoPromise.then((profilePhoto) => {
      setProfilePhoto(profilePhoto)
    });
  }, [resume, profilePhoto])


  return (
    <div>
      {/* no print, just don't let the content get too close to the top. */}
      <div className='no-print h-8'></div> 
      <main className="page">
        <Header basics={resume?.basics} pfp={profilePhoto} />
      </main>
    </div>
  )
}
