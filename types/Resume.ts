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
    duration: Duration;
    score: string;
}

export interface WorkExperience {
    company: string;
    url: string;
    position: string;
    duration: Duration;
    jobDescription: string[];
    achievement: string[];
}

export interface ProjectExperience {
    name: string;
    duration: Duration;
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

export interface Duration {
    start: string;
    end: string;
}