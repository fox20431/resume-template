import { resumeData } from "@/app/env";
import { Basic, EducationExperience } from "@/types/Resume";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { Title } from "./common/Title";
import { SubTitle } from "./common/SubTitle";
import { env } from "process";

const Education: React.FC<EducationProps> = ({ educationExperiences }) => {
  return (
    <div className="mt-6 w-full">
      {/* title */}
      <Title title="教育背景"/>
      <div className="mt-1">
        {educationExperiences?.map((educationExperience, index) => {
          const main = <div className="flex">
            {educationExperience.university}
            <div className="font-normal">
              ({educationExperience.universityType})
            </div>
          </div>
          const event = <div>{educationExperience.school} {educationExperience.major}</div>
          const time = <div>{educationExperience.startDate} ~ {educationExperience.endDate}</div>
          return (
            <div key={index}>
              <SubTitle main={main} event={event} time={time} />
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
