import { ProjectExperience } from "@/types/Resume"
import React from "react"

export const Project: React.FC<ProjectProps> = ({projectExperiences}) => {
    return (
        <div>1</div>
    )
}

interface ProjectProps {
    projectExperiences: ProjectExperience[]; 
}