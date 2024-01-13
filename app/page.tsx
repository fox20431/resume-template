"use client";
import Image, { StaticImageData } from "next/image";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import * as ResumeData from "@/types/Resume";
import EducationExperience from "@/components/Education";
import Education from "@/components/Education";

export default function Home() {
  const resumePromise = import(process.env.NEXT_PUBLIC_RESUME_DATA_LOCATION!);
  const profilePhotoPromise = import(
    process.env.NEXT_PUBLIC_PROFILE_PHOTO_LOCATION!
  );

  let [resume, setResume] = useState<ResumeData.Resume>();
  let [profilePhoto, setProfilePhoto] = useState<StaticImageData>();

  useEffect(() => {
    resumePromise.then((resumeData) => {
      setResume(resumeData);
    });
    profilePhotoPromise.then((profilePhoto) => {
      setProfilePhoto(profilePhoto);
    });
  }, [resume, profilePhoto, resumePromise, profilePhotoPromise]);

  return (
    <div className="page flex flex-row justify-center">
      {/* set no-print right margin */}
      <div
        className="no-print"
        style={{
          width: "1.25in",
          borderLeft: "1pt solid",
          borderTop: "1pt solid",
          borderBottom: "1pt solid",
        }}
      ></div>

      <div className="w-full">
        {/* set no-print top margin */}
        <div
          className="no-print"
          style={{ height: "1in", borderTop: "1pt solid" }}
        ></div>
        <main className="w-full">
          <Header basics={resume?.basics} pfp={profilePhoto} />
          <Education educationExperiences={resume?.educationExperiences} />
        </main>
        {/* set no-print bottom margin */}
        <div
          className="no-print"
          style={{ height: "1in", borderBottom: "1pt solid" }}
        ></div>
      </div>

      {/* set no-print right margin */}
      <div
        className="no-print w-full"
        style={{
          width: "1.25in",
          borderRight: "1pt solid",
          borderTop: "1pt solid",
          borderBottom: "1pt solid",
        }}
      ></div>
    </div>
  );
}
