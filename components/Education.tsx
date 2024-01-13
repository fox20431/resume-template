import { resumeData } from "@/app/env";
import { Basic, EducationExperience } from "@/types/Resume";
import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import React from "react";

const Education: React.FC<HeaderProps> = ({ educationExperiences }) => {
  return (
    <div className="mt-6 w-full">
      {/* title */}
      <div className="flex flex-row">
        <h2 className=" font-SourceHanSansHWSC text-2xl font-bold">教育经历</h2>
        <div className="flex-1 flex items-end">
          <div className="w-full border border-solid border-black mb-1"></div>
        </div>
      </div>
      <div className="mt-1">
        {educationExperiences?.map((educationExperience, index) => {
          return (
            <div key={index}>
              <div className="flex flex-row items-center justify-between font-SourceHanSansHWSC">
                <div className="flex flex-row items-center">
                  <div className="text-l font-bold font-SourceHanSansHWSC">
                    {educationExperience.university}
                  </div>
                  <div className="ml-1 text-l font-normal">
                    （{educationExperience.universityType}）
                  </div>
                </div>
                <div className="flex flex-row font-sourceHanSerifSC">
                  <div>{educationExperience.startDate}-{educationExperience.endDate}</div>
                </div>
              </div>
              <div className="mt-1 text-xs font-SourceHanSansHWSC">
                <div>{educationExperience.school}·{educationExperience.major}</div>
              </div>
              {/* honor */}
              <div></div>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface HeaderProps {
  educationExperiences: EducationExperience[] | undefined;
}

export default Education;
