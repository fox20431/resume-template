import { WorkExperience } from "@/types/Resume";
import React from "react";
import { Title } from "./common/Title";
import { SubTitle } from "./common/SubTitle";

export const Work: React.FC<WorkProps>  = ({workExperiences: workExperience}) => {
    return (
        <div>
            <Title title="工作经验" />
            {workExperience?.map((workExperience, index) => {
                return (
                    <div key={index}>
                        {/*<SubTitle event={workExperience.}*/}
                    </div>
                )
            })}
        </div>
    )
}

interface WorkProps {
    workExperiences: WorkExperience[] | undefined
}