import { resumeData } from "@/app/env";
import { Basic, EducationExperience } from "@/types/Resume";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Heading } from "./common/Heading";
import { SubHeading } from "./common/SubHeading";
import { env } from "process";

const Education: React.FC<EducationProps> = ({ educationExperiences }) => {
  return (
    <div className="mt-6 w-full">
      {/* title */}
      <Heading title="教育背景"/>
      <div className="mt-1">
        {educationExperiences?.map((educationExperience, index) => {
          const main = <div className="flex">
            {educationExperience.university}
            <div className="font-normal">
              ({educationExperience.universityType})
            </div>
          </div>
          const event = <div>{educationExperience.school} {educationExperience.major}</div>
          return (
            <div key={index}>
              <SubHeading main={main} position={event} duration={educationExperience.duration} />
            </div>
          )
        })}
      </div>
    </div>
  );
};

interface EducationProps {
  educationExperiences: EducationExperience[] | undefined;
}

export default Education;
