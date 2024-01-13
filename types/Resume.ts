export interface Basic {
    name: string;
    profession: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: Location;
}

export interface Location {
    address: string;
    city: string;
    province: string;
    country: string;
    postalCode: string;
}

export interface EducationExperience {
    university: string;
    universityType: string;
    school: string;
    major: string;
    startDate: string;
    endDate: string;
    score: string;
}

export interface WorkExperience {
    name: string;
    position: string;
    url: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface ProjectExperience {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
}

export interface Honor {
    title: string;
    date: string;
    awarder: string;
    summary: string;
}

export interface Skill {
    name: string;
    level: string;
    keywords: string[];
}

export interface Resume {
    basics: Basic;
    educationExperiences: EducationExperience[];
    workExperiences: WorkExperience[];
    projectExperiences: ProjectExperience[];
    honors: Honor[];
    skills: Skill[];
}