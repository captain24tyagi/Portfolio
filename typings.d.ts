//Base sanity body Interface

interface SanityBody {
    _createdAt: string;
    _id: string,
    _rev: string,
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

// below ... sanity interface including sanitybody interface and others
export interface Page extends SanityBody {
    _type: 'page';
    address: string;
    backgroundInformation: string;
    email: string;
    role: string;
    heroImage: Image;
    name: string;
    phoneNumber: string;
    profilePic: Image;
}

export interface Skill extends SanityBody {
    _type: 'skill';
    title: string;
    progress: number;
    image: Image;
}

export interface Technology extends SanityBody {
    _type: 'skill';
    title: string;
    progress: number;
    image: Image;
}

export interface Project extends SanityBody {
    _type: 'project';
    title: string;
    linkToBuild: string;
    image: Image;
    summary: string;
    technologies: Technology;
}

export interface Experience extends SanityBody {
    _type: 'experience';
    jobTitle: string;
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Technology;
}

export interface Social extends SanityBody {
    _type: 'social';
    title: string;
    url: string;
}