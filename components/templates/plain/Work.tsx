import { WorkExperience } from "@/types/Resume";
import React from "react";
import { Heading } from "./common/Heading";
import { SubHeading } from "./common/SubHeading";
import { Section } from "./common/Section";

export const Work: React.FC<WorkProps>  = ({workExperiences: workExperience}) => {
    return (
        <div>
            <Heading title="工作经验" />
            {workExperience?.map((workExperience, index) => {
                return (
                  <div key={index}>
                    <SubHeading
                      main={workExperience.company}
                      position={workExperience.position}
                      duration={workExperience.duration}
                    />
                    <Section title="工作描述" items={workExperience.jobDescription}/>
                    <Section title="工作成果" items={workExperience.achievement}/>
                  </div>
                );
            })}
        </div>
    )
}

interface WorkProps {
    workExperiences: WorkExperience[] | undefined
}