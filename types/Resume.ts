export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

export interface Basic {
    name: string;
    position: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: Location;
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

export interface Project {
    name: string;
    startDate: string;
    endDate: string;
    description: string;
    highlights: string[];
    url: string;
}

export interface Education {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
}

export interface Honour {
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
    work: WorkExperience[];
    projects: Project[];
    education: Education[];
    honour: Honour[];
    skills: Skill[];
}